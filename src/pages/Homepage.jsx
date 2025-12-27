import PBB from '../assets/PBB.png';
import Listrik from '../assets/Listrik.png';
import Pulsa from '../assets/Pulsa.png';
import PDAM from '../assets/PDAM.png';
import PGN from '../assets/PGN.png';
import TV from '../assets/Televisi.png';
import Musik from '../assets/Musik.png';
import Game from '../assets/Game.png';
import Makanan from '../assets/Voucher Makanan.png';
import Kurban from '../assets/Kurban.png';
import Zakat from '../assets/Zakat.png';
import PaketData from '../assets/Paket Data.png';
import Banner1 from '../assets/Banner 1.png';
import Banner2 from '../assets/Banner 2.png';
import Banner3 from '../assets/Banner 3.png';
import Banner4 from '../assets/Banner 4.png';
import Banner5 from '../assets/Banner 5.png';
import Navbar from '../components/Layout/Navbar';
import ProfileInfo from '../components/Homepage/ProfileInfo';
import KartuSaldo from '../components/Homepage/KartuSaldo';
import MenuLayanan from '../components/Homepage/MenuLayanan';
import BannerPromo from '../components/Homepage/BannerPromo';

const Homepage = () => {
  const daftarLayanan = [
    { nama: 'PBB', ikon: PBB },
    { nama: 'Listrik', ikon: Listrik },
    { nama: 'Pulsa', ikon: Pulsa },
    { nama: 'PDAM', ikon: PDAM },
    { nama: 'PGN', ikon: PGN },
    { nama: 'TV Langganan', ikon: TV },
    { nama: 'Musik', ikon: Musik },
    { nama: 'Voucher Game', ikon: Game },
    { nama: 'Voucher Makanan', ikon: Makanan },
    { nama: 'Kurban', ikon: Kurban },
    { nama: 'Zakat', ikon: Zakat },
    { nama: 'Paket Data', ikon: PaketData },
  ];

  const daftarBanner = [Banner1, Banner2, Banner3, Banner4, Banner5];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <div className="px-8 md:px-24 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <ProfileInfo nama={'Enrio Hernanda'} />
          <KartuSaldo saldo={900000} />
        </div>
        <MenuLayanan layanan={daftarLayanan} />
        <div className="mt-14 mb-10">
          <h4 className="font-bold text-gray-800 mb-5">Temukan promo menarik</h4>
          <BannerPromo banners={daftarBanner} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
