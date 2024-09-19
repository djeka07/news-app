'use server';

import { redirect } from 'next/navigation';
import { deleteSession } from '../helpers/session';

const logoutAction = (): void => {
  deleteSession();
  redirect('/login');
}

export default logoutAction;