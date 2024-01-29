"use client"
import { Button } from "@/components/ui/button";
import { TIMEOUT } from "dns";

import { useState } from "react";


export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (todo) {
            setTodos([...todos, todo]); // Correctly add the new todo to the todos array
            setTodo(""); // Clear the input after adding a todo
        }
    };

    const ClearTodo = () => {
       setTodos([]);
    }

    const editTodo = () => {
        
    }

    return (
        <>
        <div className="flex justify-center text-center">
            <input type="text" placeholder="Write here" value={todo} 
            onChange={(e) => setTodo(e.target.value)}
            className="mr-2"/>
            <Button  onClick={addTodo}>Create todo</Button>
            <Button  onClick={ClearTodo}>Clear todo</Button>

            {/* <p>{name}</p> */}
        </div>
        <ul>
                {todos.map((item, index) => (
                    <li key={index} className="hover:font-bold">{item} </li> // Display each todo item
                ))}

                <Button onClick={ClearTodo}></Button>
         </ul>

        {/* <p>{todos}</p> */}
    </>
    )

}