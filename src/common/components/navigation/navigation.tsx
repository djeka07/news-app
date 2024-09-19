import { Icon, Typography } from '@djeka07/ui';
import { css } from '@djeka07/utils';
import logoutAction from '~/auth/models/actions/logout';
import { UserNavigationItem } from '~/users/components/user-navigation-item';
import { UserResponse } from '~/users/models/services/generated/user.generated';
import { Link } from '../links';
import { icon, item, li, list, logoutButton, navigation, root, bottomLi, truncated } from './navigation.css';
import ThemeContainer from '../themes/theme.container';

type NavigationProps = {
  user: UserResponse;
};

const Navigation = async ({ user }: NavigationProps) => (
  <aside className={root}>
    <nav className={navigation}>
      <ul className={list}>
        <li className={li}>
          <Link title="Dashboard" className={item} href="/">
            <Icon name="Home" size="xlarge" className={icon} />
            <Typography className={truncated} color="link" size="small" weight="bold">
              Top news
            </Typography>
          </Link>
        </li>
        <li className={li}>
          <Link title="All news" className={item} href="/search">
            <Icon name="Layers" size="xlarge" className={icon} />
            <Typography className={truncated} color="link" size="small" weight="bold">
              All news
            </Typography>
          </Link>
        </li>
        <li className={li}>
          <Link title="All news" className={item} href="/profile">
            <Icon name="User" size="xlarge" className={icon} />
            <Typography className={truncated} color="link" size="small" weight="bold">
              {user.firstName} {user.lastName}
            </Typography>
          </Link>
        </li>
        <li className={bottomLi}>
          <form action={logoutAction} title="Logout">
            <button className={css(item, logoutButton)} name="logout" type="submit">
              <Icon size="xlarge" name="Logout" className={icon} />
              <Typography className={truncated} color="link" size="small" weight="bold">
                Logout
              </Typography>
            </button>
          </form>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Navigation;
