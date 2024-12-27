import { useState } from "react";
import ChildComponent from "../components/ChildComponent"

function LearnProps() {
const [view,setview] =useState(false)

  const userData = {
    name: "Boopathi",
    age: 26,
    email: "boopathi7476@gmail.com",
    phone: "9080787009"
  }
  function Connections(){
   setview(true)
   console.log("hello");
  }
  
console.log(userData);
  return (
    <div>hello
    <button onClick={Connections}>View</button>  
    {  view &&  <ChildComponent userData={userData} />    }
    </div>
  )
}
export default LearnProps