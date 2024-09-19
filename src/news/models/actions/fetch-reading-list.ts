'use server';

import getAuth from '~/auth/models/helpers/get-auth';
import { AuthClient, UserControllerClient } from '../services/generated/news.generated';
import createHeaders from '~/common/models/helpers/headers';
import { http } from '@djeka07/utils';

const newsApi = process.env.NEWS_API;

const fetchReadingListServerAction = async () => {
  const { accessToken } = await getAuth();
  const headers = createHeaders({ accessToken });
  newsApi;
  const client = new UserControllerClient(new AuthClient(newsApi!, headers), newsApi, http());
  return client.getUserReadList();
};

export default fetchReadingListServerAction;
