import React, { useReducer } from 'react'

const ExampleUseReducer = () => {

    const reducer = (currentValue, payload) => {
        console.log(currentValue, "current value ===>")
        console.log( payload, "payload ===>")

        if (payload.type === "add") {
            return currentValue + 5
        }
         if (payload.type === "substract") {
            return currentValue - 5
        }

        return currentValue

    }
    const [count, dispatch] = useReducer(reducer, 50)


    const handleAdd = () => {
        try {
            dispatch({ type: "add" })

        } catch (error) {
            console.log(error)
        }
    }
    
    //    /*Substract*/

    const handlesubstract = () => {
        try {
            dispatch({ type: "substract" })
        } catch (error) {
          console.log(error)  
        }
    }
      
    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <h2>count : {count}</h2>

            <button onClick={handleAdd}>Add</button>
            <button onClick={handlesubstract}>Substract</button>
        </div>
    )
}


export default ExampleUseReducer
