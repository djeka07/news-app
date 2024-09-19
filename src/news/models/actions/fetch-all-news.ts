'use server';

import getAuth from '~/auth/models/helpers/get-auth';
import createHeaders from '~/common/models/helpers/headers';
import { AuthClient, NewsControllerClient } from '../services/generated/news.generated';
import { http } from '@djeka07/utils';

const newsApi = process.env.NEWS_API;

const fetchAllNewsServerAction = async (
  query?: string,
  language: string = 'en',
  sortBy: string = 'popularity',
  take: number = 10,
  page: number = 1,
) => {
  try {
    const { accessToken } = await getAuth();
    const headers = createHeaders({ accessToken });
    const client = new NewsControllerClient(new AuthClient(newsApi!, headers), newsApi, http());
    return client.get(language, sortBy, query, page, take);
  } catch (error) {
    return { error };
  }
};

export default fetchAllNewsServerAction;
