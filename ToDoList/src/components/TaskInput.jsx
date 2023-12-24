import { useState } from "react"

export const TaskInput = ({addTask})=>{

    const[task , setTask] = useState("")

    const handelInputValue = (event)=>{
        setTask(event.target.value)
    }

    const handelAddTask =(event)=>{
        if (task.trim() === '') return ;

        event.preventDefault();
        addTask(task);
        setTask('');
    }

    return(
        <form 
        onSubmit={handelAddTask}
        className="w-full py-[5px] px-4 bg-[#DED0B6] rounded-[30px] flex items-center justify-between  ">
            <input 
            value={task}
            className="bg-transparent p-[10px] text-gray-400 font-[1rem] placeholder:text-[#B2A59B]  "
            type="text"
            placeholder="Add Item "
            onChange={handelInputValue}
            />
            <button className="bg-[#B0926A] text-white text-3xl w-[35px] h-[35px] flex items-center justify-center rounded-[50%] cursor-pointer duration-700 hover:rotate-90  ">+</button>
        </form>
    )
}