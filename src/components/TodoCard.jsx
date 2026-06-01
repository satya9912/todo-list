import React from 'react'

const TodoCard = ({data}) => {
    console.log(data);
  return (
    <div className='flex space-x-3'>
        <p>{data.todo}</p>
        <button>delete todo</button>
        <button>Mark as complete</button>
        <button>edit todo</button>
    </div>
  )
}

export default TodoCard