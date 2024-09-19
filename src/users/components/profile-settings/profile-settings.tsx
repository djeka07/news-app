import { UserResponse } from '~/news/models/services/generated/news.generated';
import { root, wrapper } from './profile-settings.css';
import { Typography } from '@djeka07/ui';
import { EditProfile } from './components/edit-profile';

type ProfileSettingsProps = {
  user: UserResponse;
};

const ProfileSettings = ({ user }: ProfileSettingsProps) => {
  return (
    <div className={root}>
      <EditProfile apiKey={user.apiKey} language={user.language} />
      <div className={wrapper}>
        <Typography variant="label">Api key</Typography>
        <Typography wordBreak="breakWord" variant="label">
          {user.apiKey}
        </Typography>
        <Typography wordBreak="breakWord" variant="label">
          All articles language
        </Typography>
        <Typography variant="label">{user.language}</Typography>
      </div>
    </div>
  );
};

export default ProfileSettings;
