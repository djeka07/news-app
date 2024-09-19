'use server';

import getAuth from '~/auth/models/helpers/get-auth';
import createHeaders from '~/common/models/helpers/headers';
import { http, parse } from '@djeka07/utils';
import { z } from 'zod';
import { ActionReturn } from '~/common/models/types/actions';
import { UserControllerClient, AuthClient } from '~/news/models/services/generated/news.generated';

const updateSelfSchema = z.object({
  apiKey: z.string().min(1, { message: 'Api key is required' }),
  language: z.string().min(1, { message: 'Language is required' }),
});
type UpdateSelfData = z.infer<typeof updateSelfSchema>;

const url = process.env.USER_API;

const updateSelfServerAction = async (_: unknown, formData: FormData): Promise<ActionReturn> => {
  const { apiKey, language } = parse<UpdateSelfData>(formData);

  const { success, error } = updateSelfSchema.safeParse({ apiKey, language });

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
      statusCode: 400,
    };
  }
  const { accessToken } = await getAuth();
  const headers = createHeaders({ accessToken });
  const client = new UserControllerClient(new AuthClient(url!, headers), url, http());
  const response = await client.createOrUpdateUser({ apiKey, language });
  return { statusCode: 200, data: response };
};

export default updateSelfServerAction;
