import CreateTodo from '@/app/components/todo/CreateTodo';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <CreateTodo user_id={session.user.id} />
    </div>
  );
};

export default page;
