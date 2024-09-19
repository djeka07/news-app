'use client';

import { Typography } from '@djeka07/ui';
import { useAuth } from '~/auth/models/hooks';

const ProfileName = () => {
  const [{ user }] = useAuth();

  if (!user) {
    return null;
  }
  return <Typography variant="h1">{`${user.firstName} ${user.lastName}`}</Typography>;
};

export default ProfileName;
