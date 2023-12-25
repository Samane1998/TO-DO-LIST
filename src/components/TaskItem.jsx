import {MdDeleteSweep} from 'react-icons/md';
export const TaskItem =({task , deletTask , toggleCheck })=>{


    return(
        <li className='bg-[#DED0B6] rounded-[12px] p-[14px] flex items-center justify-between text-[#B0926A] '>
            <div className='flex items-center gap-4 '>
                <input 
                className='p-[5px] cursor-pointer '
                type="checkbox"
                checked = {task.checked}
                onChange={()=> toggleCheck(task.taskName)}
                />
                <p className={task.checked ? 'opacity-50 line-through' : ''}>
                  {task.taskName}  
                </p>
            </div>

        <MdDeleteSweep 
        onClick={()=> deletTask(task.taskName)}
        className='w-[35px] h-[35px] text-[27px] cursor-pointer rounded-[50%] p-[5px] block hover:bg-[#e5c397] ' />
        </li>
    )
}