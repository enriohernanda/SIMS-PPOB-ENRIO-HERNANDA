import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import LogoSIMS from '../../assets/Logo.png';

const ModalTransaksi = ({ isOpen, tipe, nominal, layanan, aksi, onClose, onConfirm }) => {
  if (!isOpen) return null;
  const config = {
    konfirmasi: {
      ikon: <img src={LogoSIMS} alt="Logo" className="w-16 h-16 mb-4" />,
      teks: `Anda yakin untuk ${layanan} sebesar`,
      tombolUtama: `Ya, lanjutkan ${aksi}`,
      tombolBatal: 'Batalkan',
      warnaTombol: 'text-red-500 font-bold',
    },
    berhasil: {
      ikon: <IoCheckmarkCircle className="text-green-500 text-7xl mb-4" />,
      teks: `${layanan}`,
      status: 'berhasil!',
      tombolUtama: 'Kembali ke Beranda',
      warnaTombol: 'text-red-500 font-bold',
    },
    gagal: {
      ikon: <IoCloseCircle className="text-red-500 text-7xl mb-4" />,
      teks: `${layanan} sebesar`,
      status: 'gagal',
      tombolUtama: 'Kembali ke Beranda',
      warnaTombol: 'text-red-500 font-bold',
    },
  };

  const current = config[tipe];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 px-4">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full flex flex-col items-center text-center shadow-xl">
        {current.ikon}

        <p className="text-gray-600 text-sm">{current.teks}</p>

        <h3 className="text-2xl font-bold text-gray-800 my-1">Rp{nominal.toLocaleString('id-ID')}</h3>

        {current.status && <p className="text-gray-600 text-sm mb-4">{current.status}</p>}

        <div className="mt-6 w-full space-y-3">
          <button onClick={tipe === 'konfirmasi' ? onConfirm : onClose} className={`w-full text-sm py-2 ${current.warnaTombol} hover:opacity-80 transition-all`}>
            {current.tombolUtama}
          </button>

          {current.tombolBatal && (
            <button onClick={onClose} className="w-full text-sm text-gray-400 font-semibold hover:text-gray-600">
              {current.tombolBatal}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalTransaksi;
