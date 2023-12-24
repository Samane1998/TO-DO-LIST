import { useState } from "react"
import { TaskInput } from "./components/TaskInput"
import { TaskItem } from "./components/TaskItem";
import { Stats } from "./components/Stats";

function App() {

  const [toDoList , setToDoList ] = useState([]);
  
  const addTask = (taskName)=>{
    const newTask = {taskName , checked: false };

    setToDoList([...toDoList , newTask])
  }


  const deletTask=(deletTaskName)=>{
    setToDoList(toDoList.filter(task=> task.taskName !== deletTaskName))
  }


  const toggleCheck = (taskName)=>{
    setToDoList((prevToDoList) => prevToDoList.map(task=> task.taskName === taskName ? {...task , checked: !task.checked } : task)
    );
  };

  return (
    <>
    <div className="w-[400px] bg-[#BBAB8C] p-4 my-12 mx-auto rounded-md ">
      <h1 className="text-center font-mono text-[#706233] font-bold uppercase text-3xl tracking-[4px] py-4 ">My To Do List</h1>

      <TaskInput addTask={addTask} />

      <div className="mt-8">
        <ul className="mt-4 flex justify-center flex-col gap-2 ">
          {toDoList.map((task , key) => <TaskItem task={task} key={key} deletTask={deletTask}
          toggleCheck={toggleCheck}
          /> )}
        </ul>

        {toDoList.length === 0 ? 
        <p className="text-center text-[#706233]">You are Done!</p> 
        : null }
      </div>  
    </div>

    <Stats toDoList={toDoList} />
    </>
  )
}

export default App
