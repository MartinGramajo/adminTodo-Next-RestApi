import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  // apuntamos el complete de nuestro parámetro para que haga match con el complete de nuestra base de datos
  const body = { complete };

  // creamos la petición http
  // como vamos a modificar es un method PUT
  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(resp => resp.json());

  return todo;
};
