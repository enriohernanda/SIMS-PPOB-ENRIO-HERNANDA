import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import TopUp from './pages/TopUp';
import Pembayaran from './pages/Pembayaran';
import Transaction from './pages/Transaction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrasi" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
