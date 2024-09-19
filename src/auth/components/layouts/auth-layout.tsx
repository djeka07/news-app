import { AuthProvider } from '~/auth/models/contexts/auth.context';
import { RoleResponse, UserResponse } from '~/users/models/services/generated/user.generated';

import { PanelsRendererContainer } from '@djeka07/ui';
import { ReactNode } from 'react';
import { Authorization } from '~/auth/models/helpers/token';
import { Navigation } from '~/common/components/navigation';
import { AuthRefreshContainer } from '../auth-refresh';
import { root, main } from './auth-layout.css';

type AuthLayoutProps = {
  user: UserResponse;
  token: Authorization;
  roles: RoleResponse[];
  language: string;
  children: ReactNode;
};

const AuthLayout = ({ children, roles, token, user }: AuthLayoutProps) => (
  <AuthProvider initialUser={user} initialToken={token} initialRoles={roles}>
    {process.env.NEXT_PUBLIC_AUTH_REFRESH_ACTIVE === 'true' && <AuthRefreshContainer />}
    <div className={root}>
      <Navigation user={user} />
      <main className={main}>{children}</main>
      <PanelsRendererContainer />
    </div>
  </AuthProvider>
);

export default AuthLayout;
