import React from 'react'
import '../App.css'
import Todos from './Todos';
import Aufgabe from './Aufgabe';

const UnorderedList = (todos) => {
  return (
    <div>
        <ol>
            <Todos />
            
            <Todos />
            <Todos />

        </ol>
    </div>
  )
}

export default UnorderedList