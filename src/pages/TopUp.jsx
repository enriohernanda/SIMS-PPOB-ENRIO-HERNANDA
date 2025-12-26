import { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import KartuSaldo from '../components/Homepage/KartuSaldo';
import TopUpHeader from '../components/TopUp/TopUpHeader';
import TopUpInput from '../components/TopUp/TopUpInput';
import NominalInstan from '../components/TopUp/NominalInstan';
import ProfileInfo from '../components/Homepage/ProfileInfo';
import ModalTransaksi from '../components/Form/ModalTransaksi';
const TopUp = () => {
  const [amount, setAmount] = useState('');
  const [modalConfig, setModalConfig] = useState({
    show: false,
    tipe: 'konfirmasi',
  });

  const layananTerpilih = {
    nama: 'Top Up',
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleNominalSelect = (val) => {
    setAmount(val.toString());
  };

  const handleOpenKonfirmasi = () => {
    setModalConfig({ show: true, tipe: 'konfirmasi' });
  };

  const handleConfirmTopUp = () => {
    setModalConfig({ show: true, tipe: 'berhasil' });
  };

  const handleCloseModal = () => {
    setModalConfig({ ...modalConfig, show: false });
    if (modalConfig.tipe === 'berhasil') setAmount('');
  };

  const isButtonDisabled = !amount || parseInt(amount) < 10000 || parseInt(amount) > 1000000;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="px-8 md:px-24 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-12">
          <ProfileInfo nama="Kristanto Wibowo" />
          <KartuSaldo saldo={1500000} />
        </div>

        <TopUpHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <TopUpInput value={amount} onChange={handleInputChange} onTopUp={handleOpenKonfirmasi} isDisabled={isButtonDisabled} />
          </div>

          <div className="lg:col-span-5">
            <NominalInstan onSelect={handleNominalSelect} />
          </div>
        </div>
      </div>

      <ModalTransaksi
        isOpen={modalConfig.show}
        tipe={modalConfig.tipe}
        nominal={`${parseInt(amount) || 0} ?`}
        layanan={`${layananTerpilih.nama} sebesar`}
        aksi={`${layananTerpilih.nama}`}
        onClose={handleCloseModal}
        onConfirm={handleConfirmTopUp}
      />
    </div>
  );
};

export default TopUp;
