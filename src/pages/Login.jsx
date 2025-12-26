import { useState } from 'react';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import InputUtama from '../components/Form/InputUtama';
import HeaderAuth from '../components/Form/HeaderAuth';
import IlustrasiLogin from '../assets/ilustrasi_login.png';

const Login = () => {
  const [tampilkanPassword, setTampilkanPassword] = useState(false);

  return (
    <div className="flex min-h-screen font-sans">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-8 md:px-24">
        <div className="w-full max-w-md">
          <HeaderAuth
            judul={
              <>
                Masuk atau buat akun <br /> untuk memulai
              </>
            }
          />

          <form className="space-y-5">
            <InputUtama type="email" placeholder="masukan email anda" icon={MdAlternateEmail} />
            <InputUtama
              type={tampilkanPassword ? 'text' : 'password'}
              placeholder="masukan password anda"
              icon={MdLockOutline}
              suffixIcon={tampilkanPassword ? FaEyeSlash : FaEye}
              onSuffixClick={() => setTampilkanPassword(!tampilkanPassword)}
            />
            <button type="button" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md mt-4 transition-colors">
              Masuk
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            belum punya akun? registrasi{' '}
            <a href="/registrasi" className="text-red-500 font-bold hover:underline">
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

export default Login;
