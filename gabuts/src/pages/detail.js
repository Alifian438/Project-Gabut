import { useParams, Outlet,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"



const Detail = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})

    const url = "https://jsonplaceholder.typicode.com"
    const fetchData = async ()=>{   
        let res = await 
        
        // axios.get(`${url}/users/${id}`)
        // .then((res) => {
        //     let { data } = res
        //     setUser(data)
        //     console.log(data)
        // })
        
        axios.get(`${url}/users/${id}`)
        let data = res.data
        console.log(data);
        setUser(data) 
    }

    useEffect(() => {
        if (id !== undefined) {
            fetchData()
        }
    }, [id])


    return (
    <>
        <h1> Detail Page id: {id}</h1>
        <p>Name: {user.name}</p>
        <nav>
           <Link to="post">Post</Link>
           <Link to="product">Product</Link> 
        </nav>
       <Outlet/>
    </>
    )
}

export default Detail