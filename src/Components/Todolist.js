import React from 'react'
import { useState } from "react"
export default function Todolist() {
    const [formData,SubmitFormData] = useState({
        time:"",
        note:""
    })
    const [TableData,SubmitTable]=useState([])

    function HandleForm(e){
        const {name,value} = e.target
        SubmitFormData({...formData,[name]:value});

    }
    function HandleSubmit(){
        SubmitTable([...TableData,formData]);
        SubmitFormData({
            time:"",
            note:""
        })
    }
  return (
    <div>
      <div name="form">
        <input name="time" value={formData.time} type="time" onChange={HandleForm}/>
        <input name="note" value={formData.note} type="text" onChange={HandleForm}/>
        <br/>
        <button onClick={HandleSubmit}>Submit</button>
        <table>
        <thead>
            <tr>
                <th>Time</th>
                    <th>Note</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td>{TableData.name}</td>
                <td>{TableData.value}</td>
            </tr>
            
        </tbody>

        </table>
      </div>
    </div>
  )
}
