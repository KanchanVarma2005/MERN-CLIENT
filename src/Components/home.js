import { useState } from "react";
export default function Home(){
    let x=1;
    const [name,setName] = useState("");
    const [number,changeNumber] = useState("")
    const [ShowName,setShowName] = useState("");
    const [Table,SubmitTable]=useState([])
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleButton=()=>{
        changeNumber(x)
        
        setShowName(`${name}`);
        SubmitTable([...Table,name])

    }
    const deleteName=()=>{
        
        ("");
        changeNumber("")

    }
    return(
        <div>
            <input type="text" placeholder="Enter Name" value={name} 
            onChange={handleChange}/>
            <button className="bg-blue-500 border border-1 w-20"
            onClick={handleButton} id="btnn">Submit</button>
            
            <table>
                <tr>
                    <th>s1</th>
                    <th>Value</th>
                    <th>activity</th>
                </tr>
                {Table.map((key)=>(
              <tr>
            <td>{number}</td>
            <td>{key}</td>
            <td><button onClick={deleteName}>Delete</button></td>
             </tr>
            ))}
            </table>
        </div>
    )
}