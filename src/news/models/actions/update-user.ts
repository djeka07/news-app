'use server';

import getAuth from '~/auth/models/helpers/get-auth';
import { AuthClient, UserControllerClient } from '../services/generated/news.generated';
import createHeaders from '~/common/models/helpers/headers';
import { http } from '@djeka07/utils';
import { ActionReturn } from '~/common/models/types/actions';

const newsApi = process.env.NEWS_API;

const updateUserServerAction = async (): Promise<ActionReturn> => {
  const { accessToken } = await getAuth();
  const headers = createHeaders({ accessToken });
  return { statusCode: 400 };
};

export default updateUserServerAction;
