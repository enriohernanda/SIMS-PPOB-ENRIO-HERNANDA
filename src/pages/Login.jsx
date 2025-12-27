import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { loginUser, resetStatus } from '../store/slices/authSlice';

import InputUtama from '../components/Form/InputUtama';
import HeaderAuth from '../components/Form/HeaderAuth';
import IlustrasiLogin from '../assets/ilustrasi_login.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tampilkanPassword, setTampilkanPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (status === 'succeeded' && message === 'Login Berhasil') {
      navigate('/');
      dispatch(resetStatus());
    }

    if (status === 'failed') {
      alert(error?.message || 'Gagal masuk, silakan coba lagi');
      dispatch(resetStatus());
    }
  }, [status, message, error, navigate, dispatch]);

  const tanganiMasuk = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Email dan kata sandi wajib diisi');
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex min-h-screen font-sans bg-white">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-8 md:px-24">
        <div className="w-full max-w-md">
          <HeaderAuth
            judul={
              <>
                Masuk atau buat akun <br /> untuk memulai
              </>
            }
          />

          <form className="space-y-6 mt-8" onSubmit={tanganiMasuk}>
            <InputUtama type="email" placeholder="masukkan email anda" icon={MdAlternateEmail} value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputUtama
              type={tampilkanPassword ? 'text' : 'password'}
              placeholder="masukkan kata sandi anda"
              icon={MdLockOutline}
              suffixIcon={tampilkanPassword ? FaEyeSlash : FaEye}
              onSuffixClick={() => setTampilkanPassword(!tampilkanPassword)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={status === 'loading'} className="w-full bg-[#f42619] hover:bg-[#d31f16] text-white font-semibold py-3 rounded-md mt-4 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
              {status === 'loading' ? 'Memproses...' : 'Masuk'}
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-gray-500">
            belum punya akun? registrasi{' '}
            <Link to="/registrasi" className="text-[#f42619] font-bold hover:underline">
              di sini
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-[#FFF1F0] items-center justify-center">
        <img src={IlustrasiLogin} alt="Ilustrasi Masuk" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
