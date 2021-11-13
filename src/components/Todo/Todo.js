import { useContext} from "react"
import { TodosContext } from "../../contexst/TodosContext"

export default function Todo({todo}) {
    const {toggleTodo, setModalTodo, removeTodo, setModalTitle} = useContext(TodosContext)
    const {id, title, description, isDone, updateTime} = todo

    const date = new Date(updateTime || id)

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="ms-3 me-auto">
                <div className="fw-bold">{title}</div>
                { description }
            </div>
            <div>{ updateTime ? 'Изменен: ' : 'Создан: ' } {date.toLocaleString()}</div>
            <div className="d-grid gap-2 d-md-block">
                <button type="button" className="btn btn-secondary btn-sm ms-3" onClick={() => removeTodo(id)}>Удалить</button>
                <button type="button" className="btn btn-secondary btn-sm ms-3" data-bs-toggle="modal"
                    data-bs-target="#createModal" onClick={() => {
                        setModalTodo({id: id, title: title, description: description})
                        setModalTitle('Изменить')
                    }
                } >Изменить</button>
                <button type="button" className={"btn btn-sm ms-3 " + (isDone ? "btn-success" : "btn-secondary")}
                    onClick={() => toggleTodo(id)}>{isDone ? "Сделано" : "Сделать"}</button>
            </div>
        </li>
    )
}