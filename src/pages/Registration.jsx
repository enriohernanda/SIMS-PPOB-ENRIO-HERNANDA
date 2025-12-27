import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdAlternateEmail, MdLockOutline, MdOutlinePerson } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { registerUser, resetStatus } from '../store/slices/authSlice';
import InputUtama from '../components/Form/InputUtama';
import HeaderAuth from '../components/Form/HeaderAuth';
import IlustrasiLogin from '../assets/ilustrasi_login.png';

const Registrasi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error, message } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
  });

  const [tampilkanPassword, setTampilkanPassword] = useState(false);
  const [tampilkanKonfirmasi, setTampilkanKonfirmasi] = useState(false);

  useEffect(() => {
    if (status === 'succeeded') {
      alert(message || 'Registrasi Berhasil! Silahkan Login.');
      dispatch(resetStatus());
      navigate('/login');
    }
    if (status === 'failed') {
      alert(error?.message || 'Registrasi Gagal, silakan coba lagi.');
      dispatch(resetStatus());
    }
  }, [status, error, message, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.first_name || !formData.last_name || !formData.password || !formData.confirmPassword) {
      alert('Semua field wajib diisi sebelum melakukan registrasi');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Konfirmasi password tidak sesuai');
      return;
    }

    const { confirmPassword: _, ...dataToSend } = formData;
    dispatch(registerUser(dataToSend));
  };

  return (
    <div className="flex min-h-screen font-sans">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-8 md:px-24 py-10">
        <div className="w-full max-w-md">
          <HeaderAuth
            judul={
              <>
                Lengkapi data untuk <br /> membuat akun
              </>
            }
          />

          <form className="space-y-5" onSubmit={handleSubmit}>
            <InputUtama type="email" placeholder="masukan email anda" icon={MdAlternateEmail} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <InputUtama type="text" placeholder="nama depan" icon={MdOutlinePerson} value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
            <InputUtama type="text" placeholder="nama belakang" icon={MdOutlinePerson} value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
            <InputUtama
              type={tampilkanPassword ? 'text' : 'password'}
              placeholder="buat password"
              icon={MdLockOutline}
              suffixIcon={tampilkanPassword ? FaEyeSlash : FaEye}
              onSuffixClick={() => setTampilkanPassword(!tampilkanPassword)}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <InputUtama
              type={tampilkanKonfirmasi ? 'text' : 'password'}
              placeholder="konfirmasi password"
              icon={MdLockOutline}
              suffixIcon={tampilkanKonfirmasi ? FaEyeSlash : FaEye}
              onSuffixClick={() => setTampilkanKonfirmasi(!tampilkanKonfirmasi)}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />

            <button type="submit" disabled={status === 'loading'} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md mt-4 transition-colors disabled:bg-gray-400">
              {status === 'loading' ? 'Memproses...' : 'Registrasi'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            sudah punya akun? login{' '}
            <a href="/login" className="text-red-500 font-bold hover:underline">
              di sini
            </a>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 bg-[#FFF1F0]">
        <img src={IlustrasiLogin} alt="Ilustrasi" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Registrasi;
