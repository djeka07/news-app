import updateUserServerAction from '~/news/models/actions/update-user';
import ProfileForm, { ProfileFormProps } from '../profile-form/profile-form';

const EditProfileFormContainer = ({ initialForm, onClose }: Omit<ProfileFormProps, 'action'>) => (
  <ProfileForm action={updateUserServerAction} initialForm={initialForm} onClose={onClose} />
);

export default EditProfileFormContainer;
