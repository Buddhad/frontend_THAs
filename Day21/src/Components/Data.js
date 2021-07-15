const Data = ({task ,cal,num,tasks, setTask, index}) => {
    return (
        <div>
            <h2 className="task">{task}</h2>
            <h5 className="task">{cal}</h5>
            <button className="btn" onClick={()=>{
                // console.log("Delete = ", task);
                const newTask = tasks.filter((el , i) => i !== index)
                setTask(newTask);
            }}>Delete</button>
            

        </div>
    );
};
export default Data

