import StatusDisplay from './StatusDisplay';
import PriorityDisplay from './PriorityDisplay';
import { TbEdit } from 'react-icons/tb';
import Link from 'next/link';
import DeleteTodo from './DeleteTodo';

const TodoCard = ({ todo, byId }) => {
  const date = new Date(todo.createdAt);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  };
  const formattedDate = date.toLocaleDateString('id-ID', options);
  return (
    <>
      <div className="card w-full bg-secondary hover:bg-opacity-95 shadow-xl text-slate-900 p-4">
        <div className="flex items-center gap-2">
          <PriorityDisplay priority={todo.priority} />
          <StatusDisplay status={todo.status} />
          <div className="ml-auto flex gap-1">
            <div className="text-primary cursor-pointer hover:text-accent">
              <Link href={`/todo/edit/${todo.id}`}>
                <TbEdit size={23} />
              </Link>
            </div>
            <DeleteTodo id={todo.id} title={todo.title} />
          </div>
        </div>
        <Link href={`/todo/${todo.id}`}>
          <div
            className={`capitalize text-2xl font-sans font-bold ${
              byId ? '' : 'truncate'
            } hover:text-accent cursor-pointer mt-1`}
          >
            {todo.title}
          </div>
        </Link>
        <div className="divider divider-primary -my-1"></div>
        <div className="bg-white opacity-50 rounded-md min-h-12 w-full py-4 pr-4 pl-1 mt-1">
          <p
            className={`text-black font-sans opacity-100 ${
              byId ? '' : 'truncate'
            }`}
          >
            {todo.description}
          </p>
        </div>
        <div className="flex items-center mt-2 -mb-2">
          <div className="text-sm font-mono">{formattedDate}</div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
