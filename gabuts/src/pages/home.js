import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Crud from "../pages/crud/crud";

const Home = () => {
    const [user, setUser] = useState([])
    const [fetchTrigger, setFetchTrigger] = useState(true)
    const navigate = useNavigate()

    const url = "https://jsonplaceholder.typicode.com"
    const fetchData = async ()=>{   
        let res = await axios.get(`${url}/users`)
        let data = res.data
        console.log(data);
        setUser(data.map((x) =>{
            delete x.created_at
            delete x.updated_at
            return x
        })) 
        setFetchTrigger(false) 
    }

    useEffect(() => {
        if (fetchTrigger) {
            fetchData()
        }
    }, [fetchTrigger])

    const handleDetails = (id) => {
        console.log(id);
        navigate(`/${id}`)
    }

    return (
    <>
        <h1> Home Page</h1>
        <ul>
            {
                user.map((user)=> {
                    return (
                    
                    <li key={user.id}> 
                        {user.name} <button onClick={()=> {handleDetails(user.id)}}>Details</button></li>
                )
            })

            }
        </ul>
        
        <a href="/crud">Fitur Crud</a>
    </>
    )
}

export default Home