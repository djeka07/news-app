import { ProfileName } from '~/users/components/profile-name';
import { ProfileSettingsContainerSuspense } from '~/users/components/profile-settings';
import { root } from './profile.view.css';

const ProfileView = () => (
  <div className={root}>
    <ProfileName />
    <ProfileSettingsContainerSuspense />
  </div>
);
export default ProfileView;
