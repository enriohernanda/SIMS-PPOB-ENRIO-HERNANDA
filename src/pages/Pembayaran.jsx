import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import KartuSaldo from '../components/Homepage/KartuSaldo';
import ProfileInfo from '../components/Homepage/ProfileInfo';
import ModalTransaksi from '../components/Form/ModalTransaksi';
import PembayaranHeader from '../components/Pembayaran/PembayaranHeader';
import PembayaranForm from '../components/Pembayaran/PembayaranForm';
import IkonListrik from '../assets/Listrik.png';

const Pembayaran = () => {
  const [modalConfig, setModalConfig] = useState({
    show: false,
    tipe: 'konfirmasi',
  });

  const layananTerpilih = {
    nama: 'Listrik Prabayar',
    tarif: 10000,
    ikon: IkonListrik,
    aksi: 'Bayar',
  };

  const handleOpenKonfirmasi = () => {
    setModalConfig({ show: true, tipe: 'konfirmasi' });
  };

  const handleConfirmPembayaran = () => {
    setModalConfig({ show: true, tipe: 'berhasil' });
  };

  const handleCloseModal = () => {
    setModalConfig((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-sm md:text-base">
      <Navbar />

      <div className="px-8 md:px-24 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-12">
          <ProfileInfo nama="Enrio Hernanda" />
          <KartuSaldo saldo={1500000} />
        </div>

        <div className="max-w-full">
          <PembayaranHeader ikon={layananTerpilih.ikon} namaLayanan={layananTerpilih.nama} />
          <PembayaranForm tarif={layananTerpilih.tarif} onBayar={handleOpenKonfirmasi} />
        </div>
      </div>

      <ModalTransaksi
        isOpen={modalConfig.show}
        tipe={modalConfig.tipe}
        nominal={`${layananTerpilih.tarif.toLocaleString('id-ID')}?`}
        layanan={`Pembayaran ${layananTerpilih.nama} sebesar`}
        aksi={layananTerpilih.aksi}
        onClose={handleCloseModal}
        onConfirm={handleConfirmPembayaran}
      />
    </div>
  );
};

export default Pembayaran;
