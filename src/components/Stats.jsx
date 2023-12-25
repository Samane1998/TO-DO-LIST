export const Stats = ({toDoList}) => {
    let countList = toDoList.length;
    return(
        <div className="absolute rounded-md bottom-0 w-full p-[10px] bg-[#BBAB8C] ">
            <p className="text-center text-[#706233]">
                {countList === 0 ? 'You got everyting ! ready to go ✈' : `You Have ${countList} items on your list.`}
            </p>
        </div>
    )
}