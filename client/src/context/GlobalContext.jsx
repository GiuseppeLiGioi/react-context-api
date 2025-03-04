import { createContext, useState, useContext } from "react";

import axios from "axios";


const GlobalContext= createContext();

const GlobalProvider = ( {children} ) => {
    const [ posts, setPosts ]  = useState ([]);
    const[singlePost, setSinglePost] = useState( {} );


    const fetchPosts = () => {
        axios.get('http://localhost:3000/api/posts').then( (res) => setPosts( res.data ) )

    }

    const fetchSinglePost = (id) => {
        axios.get(`http://localhost:3000/api/posts/${id}`).then( (res) => setSinglePost( res.data ) )

    }

}