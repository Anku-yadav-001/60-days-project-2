import { useState } from "react"
import "../Styling/Signin.css"
import {useNavigate} from "react-router-dom"
export function Login(){
  let navigate=useNavigate()
  let [mail,setMail]=useState("")
  let [password,setPassword]=useState()
  
  let ans=localStorage.getItem("details")
  let backendData=JSON.parse(ans)
  function handleSubmit(){
     if(backendData.email==mail && backendData.password==password){
        alert("User login successfully")
        navigate("/")
     }
     else{
      alert("Please enter correct username and password")
     }
  }
    return <>
        <div  className="singin-container">
          <div>
               <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png" alt=""  style={{width:"12%"}}/>
               <form className="singin-form">
                  <label>Email</label> <br />
                  <input type="text" value={mail} onChange={(e)=>setMail(e.target.value)}/> <br />
                  <label>Password</label>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <button onClick={handleSubmit}>Login</button>
               </form>
               <p></p>
          </div>
      </div>
    </>
}