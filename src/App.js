// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
// import React from 'react'

function App() {  
  const [tasks, setTasks]=useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Food Shopping",
        "day": "Feb 5th at 4:30pm",
        "reminder": true
      }
])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? { ...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="container">      
      <Header/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
      
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
