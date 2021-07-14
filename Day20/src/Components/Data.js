const Data = ({task ,tasks, setTask, index}) => {
    return (
        <div>
            <h2 className="task">{task}</h2>
            <button className="btn" onClick={()=>{
                // console.log("Delete = ", task);
                const newTask = tasks.filter((el , i) => i !== index)
                setTask(newTask);
            }}>Delete</button>
            

        </div>
    );
};

export default Data
