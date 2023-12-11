import {useEffect, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import ToDoList from "./ToDoList.tsx";
import axios from "axios";


function App() {

    const [todo, setTodo] = useState<object[]>([])

    const fetchData = () => {
        //axios.get(`https://rickandmortyapi.com/api/character/?page=${pageId}`)
        axios.get("https://localhost:8080/api/todo")
            .then((response) => setTodo(response.data))
            .catch(error => {
                console.error("Error information:", error)
            })
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <>
            <h1>ToDoList</h1>
            <Routes>
                <Route path="/api" element={<ToDoList/>}/>
            </Routes>

        </>
    )
}

export default App
