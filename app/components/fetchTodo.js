export const GetTodo = async () => {
  const response = await fetch('http://localhost:3000/api/todo', {
    cache: 'no-store',
  });
  const todos = await response.json();
  return todos;
};

export const GetTodoById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
    cache: 'no-store',
  });
  const todo = await response.json();
  return todo;
};
