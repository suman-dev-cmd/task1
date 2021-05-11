import React,{useState,useEffect } from 'react'
import Button from './Button'
import Tasks from './Tasks'
import Addtask from './Addtask'
import {get,post,put,deletei} from '../service'
export default function HomeComponent() {
    const [showAdd,setShowAdd] = useState(false)
    const [tasks,setTasks] = useState([])
    const name = 'Track System'
    useEffect(() => {
        get('/tasks')
        .then(res=>{
            setTasks(res)
        })
        .catch(err=>{
            console.log(err)
        })
      }, [])
    
    const deleteTask=(id)=>{
        // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        // method: 'DELETE',
        // })
        deletei(`/tasks/${id}`)
        .then(res=>{
            res.status === 200
            ? setTasks(tasks.filter((task) => task.id !== id))
            : alert('Error Deleting This Task')
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    // const fetchTask = async (id) => {
    //     const res = await fetch(`http://localhost:5000/tasks/${id}`)
    //     const data = await res.json()
    
    //     return data
    //   }
    const toggleReminder=async(id)=>{
        let updTask = {}
        get(`/tasks/${id}`)
        .then(res=>{
            console.log(res)
            const taskToToggle = res
             updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
             put(`/tasks/${id}`,updTask)
            .then(res=>{
                setTasks(tasks.map((obj)=>obj.id === id?{...obj,reminder:res.reminder}:obj))

            })
            .catch(err=>{
                console.log(err)
            })            
        })
        .catch(err=>{
            console.log(err)
        })
       
       
    
        // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        //   method: 'PUT',
        //   headers: {
        //     'Content-type': 'application/json',
        //   },
        //   body: JSON.stringify(updTask),
        // })
    
        // const data = await res.json()
    
        
    }
    const addTask= (task)=>{
        // const res = await fetch('http://localhost:5000/tasks', {
        // method: 'POST',
        // headers: {
        //     'Content-type': 'application/json',
        // },
        // body: JSON.stringify(task),
        // })

        // const data = await res.json()
        post('/tasks',task)
        .then(res=>{
            setTasks([...tasks, res])
        })
        .catch(err=>{
            console.log(err)
        })

        // setTasks([...tasks, data])
        // console.log(task)
        // const id = Math.floor(Math.random()*1000) + 1
        // const newTask = {id,...task}
        // setTasks([...tasks,newTask])

    }
    const onShow=()=>{
        setShowAdd(!showAdd)
    }
    return (
        <div className="container">
            <center><h1>{name}</h1></center>
            <Button color={showAdd?'blue':'green'} name={showAdd?'Close':'Add'}  onShow={onShow}/>
            <br/>
            <br/>
            {showAdd?<Addtask onAdd={addTask}/>:null}
            
            {tasks.length !== 0?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
            :
            'No Task'
            }
        </div>
    )
}
