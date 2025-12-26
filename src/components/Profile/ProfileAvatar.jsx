import { MdEdit } from 'react-icons/md';
import ProfilePhoto from '../../assets/Profile Photo.png';

const ProfileAvatar = ({ nama }) => (
  <div className="flex flex-col items-center mb-10">
    <div className="relative mb-4">
      <img src={ProfilePhoto} alt="Profil" className="w-28 h-28 rounded-full object-cover border border-gray-200" />
      <label className="absolute bottom-0 right-0 bg-white border border-gray-300 p-1.5 rounded-full cursor-pointer hover:bg-gray-50 shadow-sm transition-all">
        <MdEdit size={16} className="text-gray-600" />
        <input type="file" className="hidden" accept="image/png, image/jpeg" />
      </label>
    </div>
    <h2 className="text-2xl font-bold text-gray-800">{nama}</h2>
  </div>
);

export default ProfileAvatar;
