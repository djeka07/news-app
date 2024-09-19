import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import getAuth from '~/auth/models/helpers/get-auth';
import fetchRolesServerAction from '~/users/models/actions/fetch-roles';
import fetchSelfServerAction from '~/users/models/actions/fetch-self';

const Layout = dynamic(() => import('~/auth/components/layouts/auth-layout'));

type AuthLayoutProps = {
  children: ReactNode;
  params: { lng: string };
};

const AuthLayout = async ({ children, params: { lng } }: AuthLayoutProps) => {
  const tokenData = getAuth();
  const userData = fetchSelfServerAction();
  const rolesData = fetchRolesServerAction();

  const [token, user, roles] = await Promise.all([tokenData, userData, rolesData]);
  return (
    <Layout language={lng} user={user} roles={roles} token={token}>
      {children}
    </Layout>
  );
};

export const revalidate = 0;
export default AuthLayout;
