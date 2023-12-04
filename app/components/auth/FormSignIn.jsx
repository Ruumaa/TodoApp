'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AuthForm from './AuthForm';
import { toast } from 'react-toastify';

const FormSignIn = () => {
  const router = useRouter();
  const handleLogin = async (values) => {
    const { email, password } = await values;
    const signInData = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (signInData?.error) {
      toast.error('Invalid email or passowrd');
    } else {
      toast.success('Login success');
      router.push('/');
      router.refresh();
    }
  };
  return (
    <div>
      <AuthForm isRegister={false} submit={handleLogin} />
    </div>
  );
};

export default FormSignIn;
