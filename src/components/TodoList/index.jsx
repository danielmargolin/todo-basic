import { useState } from "react"
import TodoItem from "../TodoItem"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    return <div>
        {todos.map(todo => <TodoItem {...todo} />)}
        <button onClick={addTodo}>add todo</button>
    </div>
}

export default TodoList