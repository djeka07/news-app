'use server';

import { http } from '@djeka07/utils';
import getAuth from '~/auth/models/helpers/get-auth';
import createHeaders from '~/common/models/helpers/headers';
import { AuthClient, RoleControllerClient } from '~/users/models/services/generated/user.generated';

const url = process.env.USER_API;

const fetchRolesServerAction = async () => {
  const { accessToken } = await getAuth();
  const headers = createHeaders({ accessToken });
  const client = new RoleControllerClient(new AuthClient(url!, headers), url, http());
  return client.getRoles();
};

export default fetchRolesServerAction;
