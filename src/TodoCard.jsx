import React, { useState} from 'react'
import "./TodoCard.css";


const TodoCard = (props) => {
  const { todo, todoindex, edittodos, deletetodos } = props

  // wanted to make the color of the div persist using local stoarage
  // but found it be dificult to map only to one particular div and not immediately apply the same color to all the todo divs.
  // useEffect(() => {
  //   let localbgcolor = localStorage.getItem("bgcolor")
  //   if (localbgcolor) {
  //     setbgcolor(localbgcolor)
  //   }
  // }, [])

  const [bgcolor, setbgcolor] = useState('lightblue')


  const on_select = () => {

     const newcolor = bgcolor === 'lightblue' ? 'lightgreen' : 'lightblue';
    setbgcolor(newcolor)
    //tried for persist color of todo div
    // localStorage.setItem('bgcolor', JSON.stringify({bg_color:newcolor}))
  }


  return (
    <div className='Todo_items' draggable
      style={{ backgroundColor: bgcolor }}
    >
      <div className='List_item'>
        <li key={todoindex} className='list_text'>{todo} </li>
      </div>
      <div className='complete_edit_delete_box'>
        <button onClick={() => { edittodos(todoindex) }} className='edit'>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>

        <button onClick={() => { on_select() }} className='select'>
          <i className="fa-solid fa-check"></i>
        </button>


        <button onClick={() => { deletetodos(todoindex) }} className='delete'>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default TodoCard