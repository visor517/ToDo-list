import Todo from "../Todo/Todo"

export default function TodosList({todosList}) {
   
    return (            
        <ol className="list-group list-group-numbered">
            {
                todosList.map(todo => <Todo todo={todo} key={todo.title} />)
            }
        </ol>
    )
}