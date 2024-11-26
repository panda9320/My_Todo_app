import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';
import { useState, useEffect } from 'react'


function App() {
  //localstorage fetch and init into todoarray

  const [todos, settodos] = useState([])

  const [inputvalue, setinputvalue] = useState('')

  useEffect(() => {
     if (!localStorage) {
      return
    }

    let localtodos = localStorage.getItem('todos')
    // console log used for debugging my errors
    // console.log(localtodos)
    // console.log("localstorage: ", localStorage)

    if (!localtodos) {
      return
    }
    localtodos = JSON.parse(localtodos).todos
    settodos(localtodos)
  }, [])

  // const persistcolor = (bgcolor) => {
  //   localStorage.setItem('bgcolor',JSON.stringify({bgcolor}))
  // }

  const persistdata = (newlist) => {
    localStorage.setItem('todos', JSON.stringify({ todos: newlist }))
  }

  const updatetodos = (newtodos) => {
    const newtodolist = [...todos, newtodos]
    persistdata(newtodolist)
    settodos(newtodolist)
  }

  const deletetodos = (index) => {
    const newtodolist = todos.filter((todos, todoindex) => {
      return todoindex !== index
    })
    persistdata(newtodolist)
    settodos(newtodolist)
  }

  const edittodos = (index) => {
    const newtodoitem = todos[index]
    setinputvalue(newtodoitem)
    deletetodos(index)
  }

  const for_enter_key = (e) => {
    if (e.key === 'Enter'&& inputvalue!=="") {
      updatetodos(inputvalue)
      setinputvalue('')
    }
  }



  return (
    <div className="App">
      <TodoInput for_enter_key={for_enter_key} inputvalue={inputvalue} setinputvalue={setinputvalue} updatetodos={updatetodos} />
      <TodoList edittodos={edittodos} deletetodos={deletetodos} todos={todos} />
    </div>
  );
}

export default App;
