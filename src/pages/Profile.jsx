import { useState } from 'react';
import ProfileAvatar from '../components/Profile/ProfileAvatar';
import ProfileForm from '../components/Profile/ProfileForm';
import ProfileActions from '../components/Profile/ProfileActions';
import Navbar from '../components/Layout/Navbar';

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    email: 'wallet@nutech.com',
    namaDepan: 'Kristanto',
    namaBelakang: 'Wibowo',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-10 flex flex-col items-center">
        <ProfileAvatar nama={`${profileData.namaDepan} ${profileData.namaBelakang}`} />
        <ProfileForm data={profileData} isEditMode={isEditMode} onChange={handleInputChange} />
        <ProfileActions isEditMode={isEditMode} onEdit={() => setIsEditMode(true)} onCancel={() => setIsEditMode(false)} onSave={handleSave} onLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Profile;
