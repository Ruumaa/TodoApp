import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import TodoCard from './components/todo/TodoCard';
export default async function Home() {
  const session = await getServerSession(authOptions);
  const response = await fetch('http://localhost:3000/api/todo', {
    cache: 'no-store',
  });
  const todos = await response.json();
  const filteredTodos = todos.data.filter(
    (todo) => todo.user_id === session?.user.id
  );
  if (!filteredTodos.length) {
    return (
      <div className="flex h-screen items-center">
        <div className="w-full mx-auto">
          <h1 className="text-4xl font-mono font-semibold text-slate-900 text-center">
            Todo Not Found! Let&apos;s make{' '}
            <span className="text-accent hover:text-primary">Todos</span>!
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-3 items-center gap-4 mt-10">
        {filteredTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
