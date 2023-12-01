'use client';

import AuthForm from './AuthForm';

const FormSignUp = () => {
  const handleRegister = async (values) => {
    console.log(values);
    const { username, email, password } = await values;
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    console.log(response);

    const result = await response.json();
    if (response.ok) {
    }
  };
  return (
    <div>
      <AuthForm isRegister={true} submit={handleRegister} />
    </div>
  );
};

export default FormSignUp;
