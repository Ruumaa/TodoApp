import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import EditTodo from '@/app/components/todo/EditTodo';
import { GetTodoById } from '../../../components/fetchTodo';

const Edit = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const id = params.id;
  const todo = await GetTodoById(id);
  return (
    <div>
      <EditTodo id={id} user_id={session.user.id} todoData={todo} />
    </div>
  );
};

export default Edit;
