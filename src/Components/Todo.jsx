import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Todo.css'
import {addTodo} from '../Redux/actions'

function Todo() {
    
    const dispatch = useDispatch();
    const todoList = useSelector((state)=> state.data)
    console.log("todoList ",todoList)

    const [todoData,setTodoData] =  useState([]);

    useEffect(()=>{
        setTodoData(todoList)
    },[todoList])


    //take value of task
    const [task,setTask] = useState("");
    // console.log(task)


    //take value of date
    let date = new Date().toISOString().slice(0,10);
    // console.log(date)
    const [selectedDate, setSelectedDate] = useState(date);
    // console.log(selectedDate);


    //take value of time 
    let time = new Date().toISOString().slice(11,16);
    // console.log("time ",time);
    const [selectedTime,setSelectedTime] = useState(time);
    // console.log(selectedTime);



    const handleData = () => {
        dispatch(addTodo({
            id : new Date().valueOf(),
            name: task,
            status: false,
            deadline:`${date}, ${time}`
        }))
    }


    const handleStatus = (event) => {
        console.log(event)
    }

    return (
        <>
            <div className="container">
                <div className="todo_heading">
                    <h1>Todo Application</h1>
                </div>

                <div className="addTodoForm">
                    <div className="addTodo">
                        <input type="text" placeholder='Enter task name...' id='inputField' value={task} onChange={(event)=>setTask(event.target.value)}/>
                        {/*  */}
                    </div>

                    <div className="addDeadLine">
                        <h3>Set Deadline : <input type="date" value={selectedDate} onChange={(event)=>setSelectedDate(event.target.value)}/>
                         <input type="time" value={selectedTime} onChange={(event)=>setSelectedTime(event.target.value)}/></h3>
                    </div>

                    <div className="saveButton">
                       <button id='saveBtn' onClick={()=>handleData()}>Save</button>
                    </div>
                </div>


                <div className="showTodoList">
                    <table border="1">
                        <thead>
                            <tr>
                                <td>#No</td>
                                <td>Todo Name</td>
                                <td>Status</td>
                                <td>Deadline</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoData.map((todoList)=>{
                                    return(
                                        <tr>
                                            <th>{todoList.id}</th>
                                            <th>{todoList.name}</th>
                                            <th onClick={(event)=>handleStatus(event.target.innerHTML)}>{todoList.status === false ? "Not Complete" : "Complete"}</th>
                                            <th>{todoList.deadline}</th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default Todo
