import { GetTodoById } from '@/app/components/fetchTodo';
import TodoCard from '@/app/components/todo/TodoCard';
import React from 'react';

const page = async ({ params }) => {
  const id = params.id;
  const todo = await GetTodoById(id);
  return (
    <div className="h-screen items-center flex">
      <div className="w-3/4 mx-auto">
        <TodoCard todo={todo.data} byId={true} />
      </div>
    </div>
  );
};

export default page;
