import React from 'react';
import ProfilePhoto from '../../assets/Profile Photo.png';

const ProfileInfo = ({ nama }) => (
  <div className="md:col-span-5">
    <img src={ProfilePhoto} className="w-16 h-16 rounded-full mb-4 object-cover" alt="User" />
    <p className="text-gray-500 text-lg">Selamat datang,</p>
    <h2 className="text-3xl font-bold text-gray-800">{nama}</h2>
  </div>
);

export default ProfileInfo;
