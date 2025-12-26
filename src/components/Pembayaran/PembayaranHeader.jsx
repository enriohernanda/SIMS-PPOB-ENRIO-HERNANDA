const PembayaranHeader = ({ ikon, namaLayanan }) => (
  <div className="mb-8">
    <p className="text-lg text-gray-600 mb-2 font-medium">Pembayaran</p>
    <div className="flex items-center gap-3">
      <img src={ikon} alt={namaLayanan} className="w-10 h-10 object-contain" />
      <h2 className="text-xl font-bold text-gray-800">{namaLayanan}</h2>
    </div>
  </div>
);

export default PembayaranHeader;
