import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
//   const user1 = useSelector(state => console.log(state.user))
  const user = useSelector(state => state.user)
  // console.log(user);
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div  className="w-screen h-1/2 p-10 bg-blue-100 text-slate-700">
           <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                 List of Users
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                    {user.loading && <div>Loading...</div>}
                    {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
                    {!user.loading && user.users.length ? (
                <ul>
                    {user.users.map(user => (
                      <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
             ) : null}
              
            </div>
    </div>
  )
}