import { Suspense } from 'react';
import fetchUserServerAction from '~/news/models/actions/fetch-user';
import ProfileSettings from './profile-settings';

const ProfileSettingsContainer = async () => {
  const user = await fetchUserServerAction();
  return <ProfileSettings user={user} />;
};

const ProfileSettingsContainerSuspense = () => (
  <Suspense>
    <ProfileSettingsContainer />
  </Suspense>
);

export default ProfileSettingsContainerSuspense;
