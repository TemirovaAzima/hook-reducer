import {useState, useEffect} from 'react'

export const App = ()=>{
    const [value, setValue] = useState(0);
    const [smth, setSmth] = useState(1);

    useEffect(()=>{
        console.log('UseEffect hook')
        document.title = `Increment ${value} and ${smth}`
    },[value,smth])
    return(
       <div>
           <h2>{value}</h2>
           <h2>{smth}</h2>
           <button onClick={()=> setValue(value+1)}>Increment</button>
           <button onClick={()=> setSmth(smth+1)}>Increment2</button>
       </div>
    )
}
