const NominalInstan = ({ onSelect }) => {
  const listNominal = [10000, 20000, 50000, 100000, 250000, 500000];

  return (
    <div className="grid grid-cols-3 gap-3">
      {listNominal.map((nominal) => (
        <button
          key={nominal}
          type="button"
          onClick={() => onSelect(nominal)}
          className="border border-gray-300 py-3 rounded-md text-gray-700 hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all text-center text-sm font-medium"
        >
          Rp {nominal.toLocaleString('id-ID')}
        </button>
      ))}
    </div>
  );
};

export default NominalInstan;
