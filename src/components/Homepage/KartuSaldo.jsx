import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BgSaldo from '../../assets/Background Saldo.png';

const KartuSaldo = ({ saldo }) => {
  const [tampilkanSaldo, setTampilkanSaldo] = useState(false);

  return (
    <div className="md:col-span-7 rounded-2xl p-7 text-white shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[160px]" style={{ backgroundImage: `url('${BgSaldo}')`, backgroundSize: 'cover' }}>
      <div>
        <p className="text-base font-light mb-2">Saldo anda</p>
        <h3 className="text-3xl font-bold">Rp {tampilkanSaldo ? saldo.toLocaleString('id-ID') : '••••••••'}</h3>
      </div>
      <button onClick={() => setTampilkanSaldo(!tampilkanSaldo)} className="text-[12px] flex items-center gap-2 mt-4 hover:text-gray-200 w-fit">
        {tampilkanSaldo ? 'Sembunyikan Saldo' : 'Lihat Saldo'}
        {tampilkanSaldo ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default KartuSaldo;
