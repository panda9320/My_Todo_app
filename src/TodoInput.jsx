import React from 'react'
import "./TodoInput.css";
const TodoInput = (props) => {

  const { inputvalue, setinputvalue, updatetodos, for_enter_key } = props

  const handleinputvalue = (e) => { setinputvalue(e.target.value) }



  return (
    <div className='InputTag'>
      <div className='Input'>
        <input type='text' className='Input_bar' placeholder='Enter your task for the day' value={inputvalue} onChange={handleinputvalue} onKeyDown={for_enter_key} />
      </div>
      <div className='Inputbutton'>
        <button className='Input_button'
          onClick={() => {
            if(inputvalue!==""){
            updatetodos(inputvalue)
            setinputvalue('')
          }
          }}>
          Add task
        </button>

      </div>
    </div >
  )
}

export default TodoInput