'use server';

import { http } from '@djeka07/utils';
import getAuth from '~/auth/models/helpers/get-auth';
import createHeaders from '~/common/models/helpers/headers';
import { AuthClient, NewsControllerClient } from '../services/generated/news.generated';

const newsApi = process.env.NEWS_API;

const fetchTopNewsServerAction = async (query?: string, category?: string, take: number = 10, page: number = 0) => {
  const { accessToken } = await getAuth();
  const headers = createHeaders({ accessToken });
  const client = new NewsControllerClient(new AuthClient(newsApi!, headers), newsApi, http());
  return client.getTopHeadlines('us', page, take, category, query);
};

export default fetchTopNewsServerAction;
