import { MdAlternateEmail, MdOutlinePerson } from 'react-icons/md';
import InputUtama from '../Form/InputUtama';

const ProfileForm = ({ data, isEditMode, onChange }) => (
  <div className="w-full space-y-6">
    <InputUtama label="Email" type="email" name="email" value={data.email} disabled={true} icon={MdAlternateEmail} />

    <InputUtama label="Nama Depan" type="text" name="namaDepan" value={data.namaDepan} onChange={onChange} disabled={!isEditMode} icon={MdOutlinePerson} />

    <InputUtama label="Nama Belakang" type="text" name="namaBelakang" value={data.namaBelakang} onChange={onChange} disabled={!isEditMode} icon={MdOutlinePerson} />
  </div>
);

export default ProfileForm;
