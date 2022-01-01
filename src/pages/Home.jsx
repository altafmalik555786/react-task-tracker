import {useEffect, useState} from 'react'
export default function Home() {
    const [data, setData] = useState(0);
    useEffect(() => {
        console.log("didMount", data);
    },);
    return (
        <div>
            <h1>Home</h1>
            <p>Data: {data}</p> 
            <button onClick={() =>setData(data+1)}>Modify Data</button>          
        </div>
    )
}  
