import { IoIosDoneAll } from "react-icons/io"; 
// import { IoCheckmarkDoneCircleOutline } from "react-icons/io"; 
import React from 'react'

const Todo = ({todo, index, id, done}) => {
  return (
    <>
    <div className=" w-full bg-white border rounded p-2 my-1">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-3">
            <p className="">
              {
                index+1
              }:
            </p>
            <h3 className="font-bold uppercase ">
            {todo}
          </h3>
          </div>
          <button className="bg-green-300 shadow-lg shadow-green-400 hover:shadow-2xl hover:shadow-green-700 hover:scale-105 active:scale-98 p-3 text-white font-bold cursor-pointer flex items-center" onClick={()=>done(id)}><IoIosDoneAll className="text-3xl"/>Mark Done</button>
        </div>
    </div>
    </>
  )
}

export default Todo