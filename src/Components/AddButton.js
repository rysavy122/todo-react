import React from 'react';
import '../App.css';

const AddButton = ({onClick}) => {
  




  return (
    <div>
        <button 
        id="addTodo" 
        value="addToDo"
        type="button"
        title='Fügt Aufgabe hinzu'
        onClick={ onClick }

        > Hinzufügen </button>

    </div>
  )
}

export default AddButton