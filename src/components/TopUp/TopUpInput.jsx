import { MdMoney } from 'react-icons/md';
import InputUtama from '../Form/InputUtama';

const TopUpInput = ({ value, onChange, onTopUp, isDisabled }) => (
  <div className="space-y-4">
    <InputUtama type="number" placeholder="masukan nominal Top Up" icon={MdMoney} value={value} onChange={onChange} />
    <button
      onClick={onTopUp}
      disabled={isDisabled}
      className={`w-full py-3 rounded-md font-semibold transition-all ${isDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600 active:scale-[0.98]'}`}
    >
      Top Up
    </button>
  </div>
);

export default TopUpInput;
