import {ChangeEvent, FormEvent, useState} from "react";
import {Todo, TodoStatus} from "./Todo.ts";

type TodoFormProps = {
    addNewTodo: (newTodo: Todo) => void
}

export default function TodoForm(props: TodoFormProps) {

    const [todoDescription, setTodoDescription] = useState<string>("")
    const [todoStatus, setTodoStatus] = useState<TodoStatus>("")

    function handleTodoDescription(event: ChangeEvent<HTMLInputElement>) {
        setTodoDescription(event.target.value)
    }

    function handleTodoStatus(event: ChangeEvent<HTMLInputElement>) {
        setTodoStatus(event.target.value)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newTodo: Todo = {description: todoDescription, status: todoStatus}
        props.addNewTodo(newTodo)
        setTodoDescription("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Was möchtest du machen?
                <input id={"description"} type={"text"} name={"todoDescription"} value={todoDescription}
                       onChange={handleTodoDescription}/>
            </label>
            <label htmlFor={"statusOpen"}>
                <input id={"statusOpen"} type={"radio"} name={"status"} value={"OPEN"}
                       checked={todoStatus === "OPEN"}
                       onChange={handleTodoStatus}
                />noch unbearbeitet</label>
            <label htmlFor={"statusInProgress"}>
                <input id={"statusInProgress"} type={"radio"} name={"status"} value={"IN_PROGRESS"}
                       checked={todoStatus === "IN_PROGRESS"} onChange={handleTodoStatus}
                />in Bearbeitung </label>
            <label htmlFor={"statusDone"}>
                <input id={"statusDone"} type={"radio"} name={"status"} value={"DONE"}
                       checked={todoStatus === "DONE"}
                       onChange={handleTodoStatus}
                />erledigt </label>
            <button>Speichern</button>
        </form>
    )
}