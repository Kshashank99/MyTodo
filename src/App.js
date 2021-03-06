import React,{useState, useEffect} from 'react';
import Todo from './Todo'
import {Button, FormControl, Input, InputLabel} from '@material-ui/core'
import './App.css';
import {db} from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos]= useState([]);
  const[input,setInput]= useState('');

  // when the app load, we need to listen to the database and fetch new todos as they get added/removed 
  useEffect(() => {
  // this code Headers...fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  const addTodo = (event)=>{
    // this will firof when button is clicked
    event.preventDefault() //will stop the refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input])
    setInput('');  // clear up the input afte hitting submit
  }
  return (
    <div className="App">
      <h1>Hllo world</h1>
      <form action="">
      <FormControl>
        <InputLabel>🤪😜Write a Todo👻👻</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>

      </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
        <ul>
          {todos.map(todo =>(
            <Todo text={todo}/>
            // <li>{todo}</li>
          ))}
        </ul>
      
      
    </div>
  );
}

export default App;
