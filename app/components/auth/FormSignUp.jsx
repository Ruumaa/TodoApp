'use client';

import { useRouter } from 'next/navigation';
import AuthForm from './AuthForm';
import { toast } from 'react-toastify';

const FormSignUp = () => {
  const router = useRouter();
  const handleRegister = async (values) => {
    const { username, email, password } = await values;
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    if (response.ok) {
      toast.success(result.message);
      router.push('/auth/sign-in');
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div>
      <AuthForm isRegister={true} submit={handleRegister} />
    </div>
  );
};

export default FormSignUp;
