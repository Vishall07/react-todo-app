import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import { optionGroupUnstyledClasses } from '@mui/base';
import {db} from "./firebase_config";
import firebase from 'firebase/compat/app';
import { TodoListItem } from './Todo';

function App() {
  const [todos,setTodos]=useState([])
  const [todoInput, setTodoInput] = useState("")
  useEffect(() => {
    getTodos();


  },[])

  function getTodos() {
    console.log("page was rendered")
    db.collection("todos").onSnapshot(function(querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo:doc.data().todo,
          inprogress: doc.data().inprogress
  
        
        }))

      );
      
    })

  }

  //////////////////////////
  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    console.log("button was pressed")
    setTodoInput("")
  }

  ///////////////////////////
  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <TextField id="standard-basic" required onChange={(e) => {setTodoInput(e.target.value);}} value={todoInput} label="Add Todo" variant="standard" />
        <Button type="submit" variant="outlined" onClick={addTodo} style={{display: "none"}}>Outlined</Button>
      </form>

      {
        todos.map((todo) => (
          <p>
            <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>

          </p>
          

        ))
      }
    </div>
  );
}

export default App;
