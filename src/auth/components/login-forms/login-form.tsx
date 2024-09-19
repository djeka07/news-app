'use client';
import { Button, Message, TextInput } from '@djeka07/ui';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { buttonWrapper, form, message } from './login.form.css';

type LoginFormProps = {
  redirectTo?: string;
  email?: string;
  action: (state: any, form: FormData) => any;
};

const LoginForm = ({ action, redirectTo, email }: LoginFormProps) => {
  const [state, formAction] = useActionState(action, null);
  return (
    <form className={form} action={formAction}>
      <input type="hidden" name="redirectTo" value={redirectTo || '/'} />
      <TextInput
        type="text"
        autoComplete="email"
        value={email}
        label="Email"
        placeholder="Enter email"
        error={state?.errors?.email?.[0] ? state.errors.email[0] : undefined}
        name="email"
      />
      <TextInput
        type="password"
        label="Password"
        autoComplete="current-password"
        placeholder="Enter password"
        error={state?.errors?.password?.[0] ? state.errors.password[0] : undefined}
        name="password"
      />
      <Message className={message} icon="AlertTriangle" error show={!!state?.errors?.message?.[0]}>
        {state?.errors?.message?.[0]}
      </Message>
      <div className={buttonWrapper}>
        <FormButton />
      </div>
    </form>
  );
};

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button title="Login" type="submit" isLoading={pending}>
      Login
    </Button>
  );
};

export default LoginForm;
