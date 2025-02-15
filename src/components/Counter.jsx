

import { useCallback, useMemo } from "react";
import {useSelector, useDispatch}  from "react-redux";
import { decrement, increment } from "../Slices/CounterSlice";
import { useTheme } from "../context/ThemeContext";


function Counter() {


const count = useSelector(state=>state.counter.value)


const dispatch = useDispatch()


const {state : {isDark,fontSize}} = useTheme();

 
const handleIncrement = useCallback(()=>{
    dispatch(increment())
},[dispatch]);

const handleDecrement = useCallback(()=>{
    dispatch(decrement())
},[dispatch]);



const doubleCount = useMemo(()=>{
    console.log("double count")
    return count * 2
},[count])


const style = {
    backgroundColor : isDark ? "black": "White" ,
    padding : "30px",
    borderRadius : "8px",
    fontSize : fontSize === "large" ? "1.2rem":"1rem",
    color : isDark ? "white" : "black"


}


  return (
    <div style={style} >
        <h2>Counter</h2>
        <p>Current Count : {count}</p>
        <p >Double Count (Memoized) : {doubleCount}</p>

        <button onClick={handleIncrement}>
            Increment
        </button>
        <button 
        onClick ={handleDecrement}
        >
            Decrement
        </button>
      
    </div>
  )
}

export default Counter
