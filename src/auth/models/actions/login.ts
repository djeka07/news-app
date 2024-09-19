'use server';

import { z } from 'zod';
import { ActionReturn } from '~/common/models/types/actions';
import { http, parse } from '@djeka07/utils';
import { AuthClient, AuthControllerClient } from '~/users/models/services/generated/user.generated';
import { createSession } from '../helpers/session';
import { createToken } from '../helpers/token';
import { redirect } from 'next/navigation';

const loginSchema = z.object({
  redirectTo: z.string().optional(),
  email: z.string({ message: 'An email is required' }).email('The email is not valid'),
  password: z.string({ message: 'A password is required' }).min(1, 'A password is required'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const url = process.env.USER_API;
const applicationId = process.env.APPLICATION_ID;

const loginFormAction = async (_: unknown, form: FormData): Promise<ActionReturn> => {
  const { email, password, redirectTo } = parse<LoginFormData>(form);
  try {
    const validate = loginSchema.safeParse({ email, password });
    if (!validate.success) {
      return {
        statusCode: 400,
        errors: validate.error.flatten().fieldErrors,
      }
    }
    const client = new AuthControllerClient(new AuthClient(url!, new Headers()), url, http())
    const response = await client.auth({ email, password, applicationId: applicationId! });
    await createSession(createToken(response));
  } catch (error) {
    return {
      statusCode: 401,
      errors: { message: ['Wrong email or password'] }
    }
  }
  return redirect(redirectTo || '/')
}

export default loginFormAction;