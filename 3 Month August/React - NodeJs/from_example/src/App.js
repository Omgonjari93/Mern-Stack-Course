import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ExampleCustomHook from './AllHooks/ExampleCustomHook';
import { useState } from 'react';
import ExampleuseMemo from './AllHooks/ExampleuseMemo';
import ExampleUseReducer from './AllHooks/ExampleUseReducer';
import ExampleUseRefHook from './AllHooks/ExampleUseRefHook';


function App() {
  const [showCustomHook, setShowCustomHook] = useState(false)
  const [showUseMemo, setShowUseMemo] = useState(false)
  const [showUseReducer , setShowUseReducer] = useState(false)
  const [showUseRef , setShowUseRef ] = useState(false)

  const handelCustomHook = () => {
    try {
      setShowUseMemo(false)
      setShowUseReducer(false)
      setShowUseRef(false)
      setShowCustomHook(true)
    } catch (error) {
      console.log(error)
    }
  }



  const handeluseMemo = () => {
    try {
      setShowCustomHook(false)
      setShowUseReducer(false)
      setShowUseRef(false)
      setShowUseMemo(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handeluseReducer = () => {
    try {
     setShowCustomHook(false)
     setShowUseMemo(false)
     setShowUseRef(false)
     setShowUseReducer(true)
    } catch (error) {
      console.log(error)
    }
  }
   

  const handeluseuseRef = () => {
    try {
      setShowCustomHook(false)
     setShowUseMemo(false)
     setShowUseReducer(false)
     setShowUseRef(true)
    } catch (error) {
     console.log(error) 
    }
  }

  return (
    <div className="">

      <div className='Container'>
        <div className='row'>
          <div className='col-md-1 mx-4'>
            <button className='btn  btn-primary' onClick={handelCustomHook}>
              CustomHook</button>
          </div>
          <div className='col-md-1 mx-4'>
            <button className='btn  btn-primary' onClick={handeluseMemo}>
              useMemo</button>
          </div>
          <div className='col-md-1 mx-4'>
            <button className='btn  btn-primary' onClick={handeluseReducer}>
              useReducer</button>
          </div>
          <div className='col-md-1 mx-4'>
            <button className='btn  btn-primary' onClick={handeluseuseRef}>
              useRef</button>
          </div>
        </div>
      </div>
      {showCustomHook && <ExampleCustomHook />}
      {showUseMemo && <ExampleuseMemo />}
      {showUseReducer && <ExampleUseReducer/>}
      {showUseRef && <ExampleUseRefHook/>}
    </div>
  );
}

export default App;
