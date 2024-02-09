import { createContext, useContext } from "react";

export const TodoContext = createContext({})

export const userTodo = () => {
    return useContext(TodoContext)
}