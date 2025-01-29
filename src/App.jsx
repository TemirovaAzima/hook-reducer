import {useState, useEffect} from 'react'

export const App = ()=>{
     const [value, setValue] = useState(0);
     const [smth, setSmth] = useState(1);

    useEffect(()=>{
        if(value>3){
            console.log('UseEffect hook')
            document.title = `Increment ${value} and ${smth}`
        }
    }, [value,smth])
    return(
       <div>
           <h1>{value} {smth} </h1>
           <button onClick={()=>setValue(value+1)}>Increment</button>
           <button onClick={()=> setSmth(smth+1)}>Increment</button>
       </div>
    )
}
