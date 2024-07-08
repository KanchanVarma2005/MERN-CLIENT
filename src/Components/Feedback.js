import React from 'react'
import { useState } from "react"
import '../index.css'
export default function Feedback() {
    const [formData,SubmitFormData]=useState({
        name:"",
        roll:"",
        feedback:""
    })
    const [Table,SubmitTable]=useState([])
    function HandleChange(e){
        const {name,value}=e.target;
        SubmitFormData({...formData,[name]:value});
    }
    function handleSubmit(){
        SubmitTable([...Table,formData])
        SubmitFormData({
            name:"",
            roll:"",
            feedback:""
        })
    }
  return (
    <div >
      <input type="text" placeholder="name" name="name" onChange={HandleChange} value={formData.name}/>
      <input type="text" placeholder="roll no" name="roll" onChange={HandleChange} value={formData.roll}/>
      
      <input type="text" placeholder="feedback" name="feedback" onChange={HandleChange} value={formData.feedback}/><br/>
      <button onClick={handleSubmit}>Submit</button>
      <table>
      <thead>
        <tr>
            
            <th>Name</th>
            <th>Roll No</th>
            <th>Feedback</th>
        </tr>
        </thead>
      </table>
      <tbody>
        {Table.map((key,index)=>(
        <tr>
            <td>{key.name}</td>
            <td>{key.roll}</td>
            <td>{key.feedback}</td>
        </tr>
        ))}
      </tbody>
    </div>
  )
}
