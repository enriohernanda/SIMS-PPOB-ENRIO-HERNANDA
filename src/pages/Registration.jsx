import { useState } from 'react';
import { MdAlternateEmail, MdLockOutline, MdOutlinePerson } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import InputUtama from '../components/Form/InputUtama';
import HeaderAuth from '../components/Form/HeaderAuth';
import IlustrasiLogin from '../assets/ilustrasi_login.png';

const Registrasi = () => {
  const [tampilkanPassword, setTampilkanPassword] = useState(false);
  const [tampilkanKonfirmasi, setTampilkanKonfirmasi] = useState(false);

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

          <form className="space-y-5">
            <InputUtama type="email" placeholder="masukan email anda" icon={MdAlternateEmail} />
            <InputUtama type="text" placeholder="nama depan" icon={MdOutlinePerson} />
            <InputUtama type="text" placeholder="nama belakang" icon={MdOutlinePerson} />
            <InputUtama type={tampilkanPassword ? 'text' : 'password'} placeholder="buat password" icon={MdLockOutline} suffixIcon={tampilkanPassword ? FaEyeSlash : FaEye} onSuffixClick={() => setTampilkanPassword(!tampilkanPassword)} />
            <InputUtama
              type={tampilkanKonfirmasi ? 'text' : 'password'}
              placeholder="konfirmasi password"
              icon={MdLockOutline}
              suffixIcon={tampilkanKonfirmasi ? FaEyeSlash : FaEye}
              onSuffixClick={() => setTampilkanKonfirmasi(!tampilkanKonfirmasi)}
            />

            <button type="button" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md mt-4 transition-colors">
              Registrasi
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
