import { useState } from "react";

interface TodoFormProps {
    addTodo: (newTodo: string) => void;
}

export default function TodoForm( { addTodo }: TodoFormProps ) {
    const [newTodo, setNewTodo] = useState('')

    const formSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form was submitted!', newTodo);
        addTodo(newTodo);
    };

    const newTodoChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.currentTarget.value)
    };

    return (
        <form onSubmit={formSubmitted} >
            <label htmlFor="newTodo">New Todo</label>
            <input
             onChange={newTodoChanged} 
             value={newTodo} name="newTodo"
             id="newTodo"/>
            <button type="submit" >Add New Todo</button>
        </form>
    )
}