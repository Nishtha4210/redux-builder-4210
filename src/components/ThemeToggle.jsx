import { useCallback } from "react";
import { useTheme } from "../context/ThemeContext";


function ThemeToggle(){
    
    const {state: {isDark,fontSize},dispatch } = useTheme()


    
    const handleThemeToggle =  useCallback(()=>{
        dispatch({type : "TOGGLE_THEME"});
    },[dispatch])

    const handleFontSize =  useCallback(()=>{
        dispatch(
            {type : "SET_FONT_SIZE",payload : fontSize === 'medium' ? "large" : "medium"});
    },[dispatch,fontSize])

    return <div >
        <button onClick={handleThemeToggle}>Switch to {isDark?"Light":"Dark"}</button>
        <button onClick={handleFontSize}> Font Size (Current : {fontSize})</button>

    </div>
}


export default ThemeToggle;