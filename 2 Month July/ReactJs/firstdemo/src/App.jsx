// if else
// reactHooks= useState, useEffect  
//componenet
//Event= onChang ,onClick


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import Card from './Card';


function App() {
  const [name, setName] = useState()

  const [showName, setShowName] = useState(false)


  console.log(name)


  const handleOnChange = (e) => {
    console.log(e.target.value, "===")

    setName(e.target.value)
  }

  const handleSubmit = () => {
    setShowName(true)
  }

  return (
    <>

      <Card  title="Title 1" />



      <Card />





      <input name="name" placeholder="Enter Your Name" onChange={handleOnChange} />

      <button onClick={handleSubmit}>Submit</button>



      {showName && <h1>{name}</h1>}

    

    </>
  )
}

export default App
