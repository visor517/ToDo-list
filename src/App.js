import ModalForm from "./components/ModalForm/ModalForm"
import Header from "./components/Header/Header"
import TodosList from "./components/TodosList/TodosList"
import { TodosContext } from "./contexst/TodosContext"
import { useState } from "react"

export default function App() {

  const [todosList, setTodosList] = useState(
    [
      {
        id: 1636414105967,  // вместо id используется время создания
        title: "Включить приложение",
        description: "Описание",
        isDone: true, // сделана, не сделана
        updateTime: undefined,  
      },
      {
        id: 1636414105968,
        title: "Выполнить ToDo",
        description: "Нажать на кнопку Сделать =>",
        isDone: false, // сделана, не сделана
        updateTime: undefined,
      },
      {
        id: 1636414105969,
        title: "Удалить ToDo",
        description: "Нажать на кнопку Удалить =>",
        isDone: false, // сделана, не сделана
        updateTime: 1636415000000,
      }
    ]
  )
  const [modalTodo, setModalTodo] = useState(
    {
      id: undefined,
      title: '',
      description: ''
    }
  )
  const [modalTitle, setModalTitle] = useState('')

  function addTodo({title, description}) {
    setTodosList([...todosList,
      {
        id: Date.now(),
        title: title,
        description: description,
        isDone: false
      }])
  }
  function toggleTodo(id) {
    setTodosList(todosList.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    }))
  }
  function removeTodo(id) {
    setTodosList(todosList.filter(todo => todo.id !== id))
  }
  function editTodo({id, title, description}) {
    setTodosList(todosList.map(todo => {
      if (todo.id === id) {
        todo.title = title
        todo.description = description
        todo.updateTime = Date.now()      
      }
      return todo
    }))
  }
  function validateTodo({id, title, description}) {
    let design = true
    if (!title) {
      alert('Название не может быть пустым!')
      design = false
    }
    todosList.forEach(todo => {
      if (todo.title.toLowerCase() === title.toLowerCase() && todo.id !== id) {
        alert('ToDo с таким названием уже существует!')
        design = false
        return
      }
    })

    return design
  }

  return (
    <TodosContext.Provider value={{addTodo, toggleTodo, removeTodo, editTodo, validateTodo, modalTodo, setModalTodo, modalTitle, setModalTitle}}>
      <div className="container bg-light">
        <Header />
        <main className="row p-3">
          <h2>TodosList:</h2>
          { 
            todosList.length > 0 ? <TodosList todosList={todosList} />
            : <p>Список пуст</p>
          }
        </main>
        <ModalForm />
      </div>
    </TodosContext.Provider>
  )
}
