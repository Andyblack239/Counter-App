import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0) 
  const [error, setError] = useState(false)

  const increment = (event) => {
    event.preventDefault()
    setCounter(counter + 1)
  } 

  const decrement = (event) => {
    event.preventDefault()
    setCounter(counter - 1)
    if (counter <= 0 ) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
    }
    return
  }

  const reset = (event) => {
    event.preventDefault()
    setCounter(0)
  }

  

  

  return (
    <div>
      <h1>Counter App: {counter}</h1>
      <hr />
      <button className='btn btn-danger mx-2'onClick={decrement}>- 1</button>
      <button className='btn btn-primary mx-2' onClick={increment}>+ 1</button>
      <button className='btn btn-secondary mx-2'onClick={reset}> Reset Counter</button>
      {
        error && (
            <h2 className='alert alert-danger mt-5'>Cannot Go Below Zero</h2>
          ) 
      }
    </div>
    
    
  )
}

export default App
