import React, { useState } from "react";

const Todolist = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddClick = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
      // console.log(task)
    } else {
      setTask("Write Something to Add ");
    }
  };
  const handleDeleteBtn=(index)=>
  {
    // setTasks(tasks.filter(task,index))
    console.log("This is index hhhhh",index)
  }
  return (
    <>
      <div className="container">
        <h2>📝 To-Do List</h2>
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ width: "300px", padding: "10px" }}
        />
        <button
          style={{ padding: "8px 12px", marginLeft: "15px" }}
          onClick={handleAddClick}
        >
          Add Task
        </button>
        <div className="continer">
          {/* <textarea
            value={tasks.join("\n")}
            style={{ padding: "10px", marginTop: "20px", width: "500px" }}
            rows={8}
            readOnly
          > 
          </textarea> */}
          <ul style={{ marginTop: "20px" }}>
            {tasks.map((t, index) => (
              <li key={index} style={{ marginBottom: "10px" , listStyle:"none", color:"black",fontWeight:"600"}}>
                {t}
                
                <button onClick={handleDeleteBtn(index)}
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    backgroundColor: "red",
                    borderRadius:"10px",
                    border:"1px solid red"
                  }}
                >
                  Delete Task
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Todolist;
