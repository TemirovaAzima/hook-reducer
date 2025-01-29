import {useState, useEffect} from 'react'

export const App = ()=>{
 const [value, setValue] = useState(0)

    useEffect(() =>{
        console.log('UseEffect hooki')
        document.title = `Increment ${value}`
    },[value]);
    return(
        <div>
            <h2>{value}</h2>
            <button onClick={()=>setValue(value+1)}>Increment</button>
        </div>
    )
}
