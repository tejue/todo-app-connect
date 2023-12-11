import {Todo} from "./Todo.ts"

type TodoGalleryProps = {
    description: string;
    status: string;
}
export default function TodoGallery(props: TodoGalleryProps) {
    return (
        <>
            <p>{props.description}</p>
            <p>{props.status}</p>
        </>)
}