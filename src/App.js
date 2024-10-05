// 4:35 onwards ----------- 

// -------------TO- DO LIST PROJECT------------
import logo from './logo.svg';
import 'react-notifications/lib/notifications.css';
import './App.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {useState} from 'react';

function App() {

  // let showNotification= ()=>{
  //   // NotificationManager.info("wlcm to Anshul's World");
  //   // NotificationManager.success("successfully login");
  //   NotificationManager.warning("warning accessed denied ");
  //   NotificationManager.error("wrong information entered");
  
  let [todolist, setTodolist] = useState([]);

let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if(!todolist.includes(toname))           
    {
      let finalDolist= [...todolist,toname]
      setTodolist(finalDolist);
    }
    else{
      NotificationManager.error("already exist");
    }
    // it prevent to refresh the page when we save the data in form
    event.preventDefault();
  }

  let list = todolist.map((value,index) => {
     return(
      <ToDoListItems value={value} key={index} indexNumber={index}
        todolist={todolist}
        setTodolist= {setTodolist}
      />
     )
  })

  return (
    <div className="App">
     
      <NotificationContainer/>
     {/* <button onClick={showNotification}> Save </button> */}


    <h1> TO-DO LIST</h1>
    <form onSubmit={saveToDoList}>
      <input type='text' name='toname'/> <button> Save </button>
    </form>

  <div className='outerDiv'> 
    <ul>
       {list}
    </ul>
  </div>

    </div>
  );
}


function ToDoListItems({value,indexNumber,todolist,setTodolist}){

  let [status, setStatus] = useState(false);
  let deleteRow= ()=>{
    let finalData = todolist.filter((v,i) => i != indexNumber )
    setTodolist(finalData)
  }

  let checkStatus =() =>{
        setStatus(!status)
  }
    return(
      <li className={(status) ? 'completetodo' : ""} onClick={checkStatus} >{indexNumber+1}  {value} <span onClick={deleteRow}> &times; </span></li>
    )
}

export default App;


