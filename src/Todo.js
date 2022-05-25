import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import "./Todo.css"
import { db } from './firebase_config';

export const TodoListItem = ({todo, inprogress,id}) => {
  function toggleInprogress(){
      db.collection("todos").doc(id).update({
        inprogress: !inprogress
      })
  }
  function deleteTodo(){
    db.collection("todos").doc(id).delete();
  }


  return (
    <div className='list-items' style={{display:"flex"}}>
      
        <ListItem>
         <ListItemText primary={todo} secondary={inprogress ? "InProgress" : "Completed"} />
         <hr></hr>
         <Button onClick={toggleInprogress}>
          {inprogress ? "DONE" : "UNDONE"}
        </Button>
        <Button onClick={deleteTodo}>
          X
        </Button>
        </ListItem>
        
        
    </div>
  )
}
