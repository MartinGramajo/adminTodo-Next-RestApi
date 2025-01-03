'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IoAddCircle, IoTrashOutline } from "react-icons/io5";
import * as todosApi from '@/todos/helpers/todos';



export const NewTodo = () => { 

    const [description, setDescription] = useState('');
    const router = useRouter();

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (description.trim().length ===0) return;
        await todosApi.createTodo(description);
        setDescription('');
        router.refresh();
    }

    const deleteCompleted = async (e: FormEvent)=>{
        e.preventDefault();
        await todosApi.deleteTodo();
        router.refresh();
    }

    const refreshCompleted = async (e: FormEvent)=>{
        e.preventDefault();
        await todosApi.refreshTodo();
        router.refresh();
    }

  return (
    <form onSubmit={onSubmit}  className='flex w-full'>
      <input 
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" 
        />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>
      
      <span className='flex flex-1'></span>
      <button 
        onClick={ refreshCompleted }
        type='button' className="flex items-center justify-center rounded ml-2 bg-green-600 p-2 text-white hover:bg-green-800 transition-all">
        <IoAddCircle />
        <span className="ml-2 text-text-sm">Recuperar completados</span>
        
      </button>
      <span className='flex flex-1'></span>

      <button 
        onClick={deleteCompleted }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        <span className="ml-2 text-text-sm">Borrar completados</span>
        
      </button>


    </form>
  )
}
