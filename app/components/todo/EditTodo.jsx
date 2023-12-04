'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import FormTodo from './FormTodo';

const EditTodo = ({ id, user_id, todoData }) => {
  const router = useRouter();
  const handleEdit = async (values) => {
    const response = await fetch(`/api/todo/${id}`, {
      method: 'PATCH',
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
    console.log(result);
    if (response.ok) {
      toast.success(`${result.message}`);
      router.push('/');
      router.refresh();
    } else {
      toast.error(`${result.message}`);
    }
  };
  return (
    <div>
      <FormTodo isEditing={true} submit={handleEdit} initialValues={todoData} />
    </div>
  );
};

export default EditTodo;
