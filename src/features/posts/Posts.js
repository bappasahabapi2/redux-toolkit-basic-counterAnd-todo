import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const Posts = () => {
    // const post1 =useSelector((state)=>console.log(state.post))
    const {isLoading,posts,error} =useSelector((state)=>state.post);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts())
    }, [])
    

return (
    <div  className="w-screen h-1/2 p-10 bg-purple-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                 List of posts
            </h1>
            <div className="max-w-md mx-auto mt-10 space-y-5">

                {isLoading && <h4> Loading...</h4>}
                {error && <h4>{error}</h4>} 
                <section>
                {posts  && posts.map((post)=>{
                  return<article>
                  <h1 style={{fontWeight:"bold"}}>{post.title}</h1>
                    <small>{post.body}</small>
                </article>
                })}
                </section>

            </div>
    </div>
  );
};

export default Posts