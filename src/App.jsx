import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [list, setList] = useState(()=>{
    const storedList = JSON.parse(localStorage.getItem("taskList"));
    return storedList ? storedList:[];
  })

  useEffect(()=>{
    localStorage.setItem("taskList",JSON.stringify(list))
  },[list])

  const addtask=(event)=>{
    setTask(event.target.value)
  }

  const click=(e)=>{
    e.preventDefault()
    if(task.length!==0){
      setList([...list,task])
    }
  }

//  const edit=()=>{
//       const editlist = [...list]

//  }

  const deletetask=(index)=>{
    list.splice(index,1)
    setList([...list])
  }

  return (
    <>
      <div className='container'>
      <h2>TO-DO-LIST</h2>
      <div>
      <input className='input' type="text" placeholder='Type Here' onChange={addtask}/>
      <button className='button' onClick={click}>Add Task</button>
      </div>
      <ul>
        {list.map((item,index)=>
        <li className='li' key={index}> 
        <input type="checkbox"/> 
        <span>{item}</span>
        <button className='button1' onClick={()=>deletetask(index)}>Delete</button></li>
        )}
      </ul>
      </div>
    </>
  )
}

export default App
