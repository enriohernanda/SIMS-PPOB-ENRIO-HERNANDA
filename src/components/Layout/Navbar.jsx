import Logo from '../../assets/Logo.png';

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 md:px-24 py-4 border-b border-gray-100">
    <div className="flex items-center gap-2">
      <img src={Logo} alt="Logo" className="w-6 h-6" />
      <span className="font-bold text-gray-800">SIMS PPOB</span>
    </div>
    <div className="flex gap-10 font-semibold text-gray-700 items-center">
      <a href="/topup" className="hover:text-red-500">
        Top Up
      </a>
      <a href="/transaction" className="hover:text-red-500">
        Transaction
      </a>
      <a href="/profile" className="hover:text-red-500">
        Akun
      </a>
    </div>
  </nav>
);

export default Navbar;
