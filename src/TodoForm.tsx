import {ChangeEvent, FormEvent, useState} from "react";
import {Todo} from "./Todo.ts";

type TodoFormProps= {
addNewTodo: (newTodo: Todo) => void
}

export default function TodoForm(props: TodoFormProps) {

    const [todoDescription, setTodoDescription] = useState<string>("")

    function handleTodoDescription(event:ChangeEvent<HTMLInputElement>){
    setTodoDescription(event.target.value)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const newTodo: Todo = {description: todoDescription}
        props.addNewTodo(newTodo)
        setTodoDescription("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Was möchtest du machen?
                <input type={"text"} name={"todoDescription"} id={"description"} value={todoDescription} onChange={handleTodoDescription}/>
            </label>
            <button>Speichern</button>
        </form>
    )
}