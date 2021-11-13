import { useContext} from "react"
import { TodosContext } from "../../contexst/TodosContext"

export default function CreateForm() {
    const {addTodo, editTodo, validateTodo, modalTodo, setModalTodo, modalTitle} = useContext(TodosContext)

    function handleSubmit(e) {
        if (validateTodo(modalTodo)) {
            if (modalTodo.id) editTodo(modalTodo)
            else addTodo(modalTodo)
        }

        e.preventDefault()
    }
   
    return (
        <div className="modal fade" id="createModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{`${modalTitle} ToDo`}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form className="modal-body" onSubmit={e => handleSubmit(e, modalTodo)}>
                        <div className="mb-3">
                            <label htmlFor="todoTitle" className="form-label">Название</label>
                            <input type="text" className="form-control" id="todoTitle" name="title"
                            value={modalTodo.title} onChange={e => setModalTodo({...modalTodo,title: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="todoDescription" className="form-label">Описание</label>
                            <textarea className="form-control" id="todoDescription" name="description"
                            value={modalTodo.description} onChange={e => setModalTodo({...modalTodo, description: e.target.value})} />
                        </div>
                        <button type="submit" className="btn btn-success">{modalTitle}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}