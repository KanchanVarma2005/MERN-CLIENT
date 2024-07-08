import { Mycontext } from "./Mycontext.js";
import './index.css'
import { useContext } from "react";



export default function Mycomponent() {
    //consumer
    const {text,setText} = useContext(Mycontext)
  return (
    <div >
      <h1 class="text-red-200"> {text}</h1>
      <button onClick={() => setText("Hello world")}>click</button>
    </div>
  )
}
