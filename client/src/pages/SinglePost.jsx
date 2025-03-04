import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {


    const[singlePost, setSinglePost] = useState( {} )
    const { id } = useParams()
    const postId = parseInt(id, 10)  //questa riga converte l'id in numero DECIMALE: DETTATO DAL ,10


    
    useEffect( () => {
        axios.get(`http://localhost:3000/api/posts/${id}`)
        .then(res => setSinglePost(res.data))

    }, [id] )


    const navigate = useNavigate();
    return(
        <>
        <h1> Singolo prodotto: {id} </h1>
        <h2> Titolo: {singlePost.title}</h2>

        <button
        onClick={() => navigate(`/posts/${postId + 1}`)}
        className="btn btn-primary"
        >
        post successivo    

        </button>

        <button
        onClick={() => navigate(`/posts/${postId - 1}`)}
        className="btn btn-danger"
        disabled= {postId <= 1}
        >
        post precedente    

        </button>

        </>

        

    )
}

export default SinglePost;