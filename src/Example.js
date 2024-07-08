import { Mycontext } from "./Mycontext.js";
import React, { useState } from 'react'
import Mycomponent from "./Mycomponent.js";
import './index.css'

export default function Example() {
    //provider
    const [text,setText]=useState("");
    
  return (
    <div>
      <Mycontext.Provider value={{text,setText}}>
        <Mycomponent/>

        {/* you can add as many components as u want 
        Provider will provide all the props to the given components */}

      </Mycontext.Provider>
    </div>
  )
}
