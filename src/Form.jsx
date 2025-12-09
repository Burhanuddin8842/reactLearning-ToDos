import { BiErrorCircle } from "react-icons/bi"; 
import React, { useState } from 'react'
import Todo from "./Todo";

const Form = () => {
    let [data,setData] = useState([])
    let [todo,setTodo] = useState('')
    let [error,setError] = useState(false)
    const done = (rmvid)=>{
        setData(
            data.filter(
                (items,index)=>{
                    return items.id !== rmvid
                }
            )
        )
    }
    const AddTodo = (e)=>{
        e.preventDefault()
        console.log(e)
        if(!todo){
            setError(true)
        }else{
            setError(false)
            setData([...data, {todo, id: Date.now()}])
            setTodo('')
            console.log(data)
        }
    }
    // console.log(data)
  return (
    <>
    <div className=" shadow-violet-100 shadow-xl w-4/5 border my-4 mx-auto p-3 rounded-lg bg-rose-100 relative">
    <h2 className="text-lg text-bold underline decoration-1">"Add todo:"</h2>
    <form action="">
        <div className="grid grid-cols-5">
            <div className="col-span-2 text-center">
                <label htmlFor="todo" className="text-gray-400 font-serif capitalize text-xl text-center">todo</label>
            </div>
            <div className="col-span-3">
                <input type="text" autoFocus className="outline-0 border rounded  w-full px-1  border-black text-xl font-serif font-bold" id='todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                <p className={`text-sm text-red-600 font-mono flex items-center ${!error ? 'hidden': ''}`}><BiErrorCircle />The field is empty</p>
            </div>
        </div>
        <div className="flex justify-end py-2">

        <button className="bg-emerald-300 rounded border-0 p-2 cursor-pointer hover:bg-emerald-400 hover:scale-105 active:scale-98 hover:shadow-emerald-200" onClick={AddTodo}>Add</button>
        </div>
    </form>
    </div>

    <div className="w-5/6 my-2 p-2 rounded shadow-fuchsia-300 border bg-lime-100 mx-auto">
    <h1 className="text-xl font-bold">Your Todos:</h1>
    {
        data.map((items,index)=>{
            return <Todo {...items} index={index} done = {()=>done(items.id)} key={items.id}/>
        })
    }
    </div>
    </>
  )
}

export default Form