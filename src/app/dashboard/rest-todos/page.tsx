import prisma from "@/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";

export const metadata = {
  title: "Listado de Todos",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  // useEffect(() => {
  //   fetch('/api/todos')
  //   .then( resp=> resp.json())
  //   .then(console.log);

  // }, []);

  return (
    <div>
      {/* TODO:FORMULARIO PARA AGREGAR  */}
      <h1>RestTodosPage Page</h1>
      <TodosGrid todos={todos} />
    </div>
  );
}
