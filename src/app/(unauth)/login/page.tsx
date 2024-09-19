import LoginView from '~/auth/views/login.view';

type LoginPageProps = {
  searchParams: { [key: string]: string | undefined };
};

export async function generateMetadata() {
  return { title: 'Login', description: 'Login in to the news application' };
}

const LoginPage = ({ searchParams }: LoginPageProps) => (
  <LoginView redirectTo={searchParams?.redirectTo} email={searchParams?.email} />
);
export default LoginPage;
