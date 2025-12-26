import { MdMoney } from 'react-icons/md';
import InputUtama from '../Form/InputUtama';

const PembayaranForm = ({ tarif, onBayar }) => (
  <div className="w-full space-y-5">
    <InputUtama type="text" icon={MdMoney} value={tarif.toLocaleString('id-ID')} disabled={true} />

    <button onClick={onBayar} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors shadow-sm active:scale-[0.99]">
      Bayar
    </button>
  </div>
);

export default PembayaranForm;
