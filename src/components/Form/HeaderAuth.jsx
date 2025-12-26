import Logo from '../../assets/Logo.png';

const HeaderAuth = ({ judul }) => (
  <div className="text-center w-full">
    <div className="flex items-center justify-center gap-2 mb-6">
      <img src={Logo} alt="Logo" className="w-6 h-6" />
      <h1 className="text-xl font-bold text-gray-800">SIMS PPOB</h1>
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-10 leading-tight">{judul}</h2>
  </div>
);

export default HeaderAuth;
