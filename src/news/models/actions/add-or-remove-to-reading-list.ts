'use server';

import getAuth from '~/auth/models/helpers/get-auth';
import { AuthClient, NewsArticleResponse, UserControllerClient } from '../services/generated/news.generated';
import createHeaders from '~/common/models/helpers/headers';
import { http } from '@djeka07/utils';
import { revalidatePath } from 'next/cache';

const newsApi = process.env.NEWS_API;

const addOrRemoveToReadingListServerAction = async (url: string, article?: NewsArticleResponse) => {
  const { accessToken } = await getAuth();
  const headers = createHeaders({ accessToken });
  const client = new UserControllerClient(new AuthClient(newsApi!, headers), newsApi, http());
  revalidatePath('/');
  if (!!article) {
    return client.addToUserReadingList(url, article);
  }
  return client.removeFromUserReadingList(url);
};

export default addOrRemoveToReadingListServerAction;
