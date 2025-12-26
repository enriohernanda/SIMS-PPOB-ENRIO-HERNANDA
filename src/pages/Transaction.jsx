import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import ProfileInfo from '../components/Homepage/ProfileInfo';
import KartuSaldo from '../components/Homepage/KartuSaldo';
import TransactionItem from '../components/Transaction/TransactionItem';

const Transaction = () => {
  const [history] = useState([
    {
      total_amount: 10000,
      transaction_type: 'TOPUP',
      description: 'Top Up Saldo',
      created_on: '17 Agustus 2023 13:10 WIB',
    },
    {
      total_amount: 40000,
      transaction_type: 'PAYMENT',
      description: 'Pulsa Prabayar',
      created_on: '17 Agustus 2023 12:10 WIB',
    },
    {
      total_amount: 10000,
      transaction_type: 'PAYMENT',
      description: 'Listrik Pascabayar',
      created_on: '17 Agustus 2023 11:10 WIB',
    },
    {
      total_amount: 50000,
      transaction_type: 'TOPUP',
      description: 'Top Up Saldo',
      created_on: '17 Agustus 2023 10:10 WIB',
    },
  ]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="px-8 md:px-24 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-10">
          <ProfileInfo nama="Kristanto Wibowo" />
          <KartuSaldo saldo={1500000} />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-6">Semua Transaksi</h2>
        <div className="max-w-full">
          {history.length > 0 ? (
            <>
              {history.map((item, index) => (
                <TransactionItem key={index} item={item} />
              ))}

              <div className="text-center mt-8 mb-12">
                <button className="text-red-500 font-bold hover:text-red-700 transition-colors">Show more</button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400">Maaf tidak ada histori transaksi saat ini</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
