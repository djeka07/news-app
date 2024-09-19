'use server';
import { Authorization, createToken } from '~/auth/models/helpers/token';
import { createSession, deleteSession } from '../helpers/session';
import { redirect } from 'next/navigation';
import { AuthClient, AuthControllerClient } from '~/users/models/services/generated/user.generated';
import { http } from '@djeka07/utils';

const url = process.env.USER_API;

const refreshAuthenticationAction = async (token: string, redirectTo: string): Promise<Authorization> => {
  try {
    const client = new AuthControllerClient(new AuthClient(url!, new Headers()), url, http())
    const response = await client.refresh(token);
    const auth = createToken(response);
    await createSession(auth);
    return auth;
  } catch (err) {
    await deleteSession();
    redirect(redirectTo);
  }
};

export default refreshAuthenticationAction;
