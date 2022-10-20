import React, {useState} from 'react'
import AddButton from './AddButton'
import Aufgaben from './Aufgaben'


const Input = () => {

  const [todos, setTodos] = useState( ['Todo 1', 'Todo 2' ] )

  const onClick = () => {
    alert("Button funktioeniert.")
    
  }

  return (
    <div id="input-div">

        <input id="neuTodo" 
               name="neuToDo" 
               type="text" 
               placeholder="Aufgabe hinzufügen">
        </input>
        <AddButton onClick={onClick} />

    </div>
  )
}

export default Input