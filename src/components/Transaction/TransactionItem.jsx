import React from 'react';

const TransactionItem = ({ item }) => {
  const isTopUp = item.transaction_type === 'TOPUP';

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 flex justify-between items-center bg-white shadow-sm">
      <div className="space-y-1">
        {/* Nominal dengan indikator warna */}
        <h3 className={`text-xl font-bold ${isTopUp ? 'text-green-500' : 'text-red-500'}`}>
          {isTopUp ? '+ ' : '- '}
          Rp {item.total_amount.toLocaleString('id-ID')}
        </h3>
        {/* Waktu Transaksi */}
        <p className="text-xs text-gray-400">{item.created_on}</p>
      </div>

      {/* Deskripsi Layanan */}
      <span className="text-sm text-gray-700 font-medium">{item.description}</span>
    </div>
  );
};

export default TransactionItem;
