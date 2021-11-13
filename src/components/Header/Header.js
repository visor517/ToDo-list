import { useContext } from "react"
import { TodosContext } from "../../contexst/TodosContext"

export default function Header() {
    const {setModalTodo, setModalTitle} = useContext(TodosContext)
    
    return (
        <header className="row bg-success text-white p-3">
            <div className="col d-flex justify-content-between align-items-center">
                <span className="fw-bold">Logo</span>
                <button type="button" className="btn btn-outline-light" data-bs-toggle="modal"
                    data-bs-target="#createModal" onClick={() => {
                        setModalTodo({id: undefined, title:'',description:''})
                        setModalTitle('Создать')
                    }
                }>Создать ToDo</button>
            </div>  
        </header>
    )
}