'use client';
import { toast } from 'react-toastify';
import FormTodo from './FormTodo';
import { useRouter } from 'next/navigation';

const CreateTodo = ({ user_id }) => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    const response = await fetch('/api/todo/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        status: values.status,
        priority: values.priority,
        user_id: user_id,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      toast.success(`${result.message}`);
      router.push('/');
      router.refresh();
    } else {
      toast.error(`${result.error.message}`);
    }
  };
  return (
    <div>
      <FormTodo isEditing={false} submit={handleSubmit} />
    </div>
  );
};

export default CreateTodo;
