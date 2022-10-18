import React from 'react'
import '../App.css'
import Todo from './Todo';

const UnorderedList = () => {
  return (
    <div>
        <ol>
            <Todo />
            <Todo />
            <Todo />

        </ol>
    </div>
  )
}

export default UnorderedList