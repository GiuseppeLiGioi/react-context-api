//import { useState, useEffect } from "react";

import { useEffect } from "react";

//import axios from "axios"; 
import { NavLink} from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const PostsList = () =>{

    //const [ posts, setPosts ]  = useState ([]);


    const { posts, fetchPosts } = useGlobalContext();


    useEffect( () => {
    fetchPosts();
    }, [])


   


    return(
   <>
   <div className="container">
    <div className="row">
        {
            posts.map((post)=>{
                return(
                    <div key={post.id} className="col-4">
                        <NavLink to={`/posts/${post.id}`}>

                        <h4 className="card-title">{post.title}</h4>
                        <p className="card_text">{post.content}</p>

                        </NavLink>
                    </div>

                        
                       
                )
            })
        }

    </div>

   </div>
   </>
)
}

export default PostsList;