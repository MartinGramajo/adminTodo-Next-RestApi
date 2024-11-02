'use client'

import React from 'react'
import { Todo } from '@prisma/client';
import TodoItem from './TodoItem';


// esto es cuando tenemos muchas acciones 
// nos brinda la posibilidad de tener un codigo mucho mas ordenado al saber de que carpeta o elemento estamos importante las funciones

import * as api from "@/todos/helpers/todos"

interface Props {
    todos?:Todo[];
}


const TodosGrid = ({todos=[]}:Props) => {
  return (
    <div className='gird grid-cols-1 sm:grid-cols-3 gap-2'>
     {
        todos.map( todo => (
            <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleTodo={api.updateTodo}
            />
        ))
     }
    </div>
  )
}

export default TodosGrid
