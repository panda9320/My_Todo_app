import React from 'react'
import TodoCard from './TodoCard'



const TodoList = (props) => {
  const { todos, deletetodos, edittodos } = props
  return (
    <div className='list_component'>
      <h3>Todo Registry</h3>
      <ul>
        {todos.map((todo, todoindex) => (
          <TodoCard
            
            deletetodos={deletetodos}
            edittodos={edittodos}
            todo={todo}
            todoindex={todoindex}
          ></TodoCard>

        ))}
      </ul>
    </div>

  )
}

export default TodoList