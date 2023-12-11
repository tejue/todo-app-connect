import {useEffect, useState} from 'react'
import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import ToDoList from "./ToDoList.tsx";
import axios from "axios";
import TodoGallery from './TodoGallery.tsx';
import {Todo} from "./Todo.ts";


function App() {

    const [todos, setTodo] = useState<Todo[]>([])

    const fetchData = () => {
        //axios.get(`https://rickandmortyapi.com/api/character/?page=${pageId}`)
        axios.get("/api/todo")
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
            <Link to={"/todolist"}>Home</Link>
            <Routes>
                <Route path="/todolist" element={<ToDoList/>}/>
            </Routes>
            <p>
                {todos.map((todo: Todo) =>
                    <TodoGallery description={todo.description} status={todo.status}/>)
                }</p>
        </>
    )
}

export default App
