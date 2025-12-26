const ProfileActions = ({ isEditMode, onEdit, onCancel, onSave, onLogout }) => {
  if (!isEditMode) {
    return (
      <div className="pt-6 space-y-4 w-full">
        <button onClick={onEdit} className="w-full border bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition-colors cursor-pointer">
          Edit Profil
        </button>
        <button onClick={onLogout} className="w-full border border-red-500 text-red-500 font-semibold py-3 rounded-md hover:bg-red-50 transition-colors cursor-pointer">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="pt-6 space-y-4 w-full">
      <button onClick={onSave} className="w-full bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition-colors cursor-pointer">
        Simpan
      </button>
      <button onClick={onCancel} className="w-full border border-red-500 text-red-500 font-semibold py-3 rounded-md hover:bg-red-50 transition-colors cursor-pointer">
        Batalkan
      </button>
    </div>
  );
};

export default ProfileActions;
