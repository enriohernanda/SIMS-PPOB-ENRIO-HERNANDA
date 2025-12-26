const InputUtama = ({ label, type, placeholder, icon: Icon, value, onChange, name, disabled, suffixIcon: SuffixIcon, onSuffixClick }) => {
  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm font-medium text-gray-800">{label}</label>}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">{Icon && <Icon size={18} />}</div>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 transition-all text-sm ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}`}
        />

        {SuffixIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400 hover:text-gray-600" onClick={onSuffixClick}>
            <SuffixIcon size={18} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputUtama;
