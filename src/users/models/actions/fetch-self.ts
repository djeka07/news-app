'use server';

import getAuth from '~/auth/models/helpers/get-auth';
import createHeaders from '~/common/models/helpers/headers';
import { AuthClient, SelfControllerClient } from '~/users/models/services/generated/user.generated';
import { http } from '@djeka07/utils';

const url = process.env.USER_API;

const fetchSelfServerAction = async () => {
  const { accessToken } = await getAuth();
  const headers = createHeaders({ accessToken });
  const client = new SelfControllerClient(new AuthClient(url!, headers), url, http());
  return client.get();
};

export default fetchSelfServerAction;
