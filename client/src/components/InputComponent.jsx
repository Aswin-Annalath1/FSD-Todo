
//all received inside an arrow function from app.jsx..
const InputComponent = ({editTaskId,setEditTaskId,taskList,setTaskList,text,setText,userid}) => {
  const handleTextchange = (event) => {
    setText(event.target.value);
  };


  const changeTaskWithEnterKey = (event) => {
    if (event.key === "Enter" && !!event.target.value) {
      setTaskList((taskList) => [
        ...taskList,
        {
          id: taskList.slice(-1)[0] ? taskList.slice(-1)[0].id + 1 : 1,
          name: event.target.value,
        },
      ]);
      setText("");
    }
  };


  const changeTask = () => {
    //Add todo case..
    if (!!text && editTaskId < 1) {
      //This is Adding to BE
      fetch("https://fsd-todo.onrender.com/todos/"+userid,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title: text})  //Whatever i write currently in FE
      })
      .then((res) => {return res.json()})
      .then((data) => {console.log(data)
      //This is Adding to FE
      setTaskList((taskList) => [
        ...taskList,   //It take whatever in the list and also going to add new one...
        {
          id: taskList.slice(-1)[0] ? taskList.slice(-1)[0].id + 1 : 1,  //here we take id = last index of tasklist array object and then take 1st key(id) of that object.
          name: text,
          _id: data._id,
          userID: data.userID
        },
      ])
      setText("")
      })
      .catch((err) => {console.log(err)})
      return;
    }

//Edit a current todo case...

    let index = taskList.findIndex((obj) => obj.id === editTaskId);  //editTaskId we got from app.jsx
    if (index > -1) {
    //This is Edited add to BE
    fetch("https://fsd-todo.onrender.com/todos/"+userid+"/"+taskList[index]._id,{
      //PUT help again edit by admin if required..
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ title: text})  //Whatever i write currently in FE 
      })
      .then((res) => {return res.json()})
      .then((data) => {console.log(data)})
      .catch((err) => {console.log(err)})

      //This is Edited add to FE taskList
      taskList[index].name = text;  //here name is set to current text.
      setTaskList([...taskList]); //setting tasklist with edited task..
      setEditTaskId(-1);
      setText("");
    }

  };

  return (
    <div className="py-3 flex w-full">
      <div className="grow">
        <input
          type="text"
          id="text"
          value={text}
          onChange={handleTextchange}
          onKeyDown={changeTaskWithEnterKey}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 p-2.5"
          placeholder="Task giriniz..."
        />
      </div>
      <div>
        <button
          onClick={changeTask}
          className={`${
            setEditTaskId ? "w-24" : "w-14"
          } flex-none px-2.5 py-2 ml-2 hover:bg-red-300 bg-red-400 rounded-md text-gray-100`}
        >
          {editTaskId > -1 ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};


export default InputComponent;
