const TodoItem = ({id, title, isComplete}) => {
    return <div style={{color: isComplete ? 'red': 'black'}}>{title}</div>
}

export default TodoItem