import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <>
    <div className="w-screen h-screen bg-amber-100 p-3">
      <h1 className="text-center text-6xl uppercase font-mono underline decoration-double text-fuchsia-700 font-extrabold">todo list</h1>
      <Form/>
    </div>
    </>
  )
}

export default App