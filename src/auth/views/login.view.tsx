import { Typography } from '@djeka07/ui';
import { LoginForm } from '../components/login-forms';
import loginFormAction from '../models/actions/login';

type LoginViewProps = {
  redirectTo?: string;
  email?: string;
};

const LoginView = async ({ redirectTo, email }: LoginViewProps) => (
  <>
    <Typography variant="h1">Login</Typography>
    <LoginForm action={loginFormAction} redirectTo={redirectTo} email={email} />
  </>
);

export default LoginView;
