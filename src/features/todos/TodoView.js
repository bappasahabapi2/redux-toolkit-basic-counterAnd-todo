import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchTodos } from './todoSlice'


const TodoView = () => {
    const todo =useSelector(state=>state.todo)
    const dispatch = useDispatch()

    // const {loading,todos,error} =useSelector((state)=>console.log(state.todos))
   
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])
    


  return (
    <div className="w-screen h-1/2 p-10 bg-green-100 text-slate-700">
        
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                 List of Todos ...
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
                    {todo.loading && <div>Loading...</div>}
                    {todo.error && <h4>{todo.error}</h4>} 
                    {!todo.loading && todo.users.length ? (
                <ul>
                    {todo.todos.map(todo => (
                      <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
             ) : null}
              
            </div>
        
    </div>


  )
}

export default TodoView