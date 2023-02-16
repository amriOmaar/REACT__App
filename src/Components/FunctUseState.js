import React, {useState, useEffect,useContext} from "react"
import MyContext from "./MyContext";

// -rfce

function FunctUseState(){

    const contextValue = useContext(MyContext);

    const [count, setCount] = useState(0);
    const [{color, background},setColor] = useState({})

    useEffect(()=>{
        console.log("execution useEffect"); 
        
    },[])
    useEffect(()=>{
        console.log("count update"); 
    },[count])
    useEffect(()=>{
        console.log("Some changes"); 
        
    })

    return <div>
            <>
                Welcome {contextValue.username},
                {
                    contextValue.loggedIn ? (
                        <p>You are logged in</p>
                    ) :( <p>You are not logged in</p> )
                }
            </>



    <input type="text" onChange={(e)=> setColor((current)=>({...current,background: e.target.value}))} />
    <input type="text" onChange={(e)=> setColor((current)=>({...current,color: e.target.value}))} />
    <button onClick={()=>setCount(count+1)} > Count - {count} </button>
    <h1>background: {background}</h1>
    <h1>Color:  {color}</h1>
    </div>
}

export default FunctUseState