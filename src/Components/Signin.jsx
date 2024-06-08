import { useContext } from "react"
import "../Styling/Signin.css"
import {AuthContext} from "../Context/AuthContext"
import {useNavigate} from "react-router-dom"
function Signin(){
   let {email,setEmail}=useContext(AuthContext)
   let naviage=useNavigate()
   function handleSubmit(){
     if(email!=""){
        naviage("/sign-in-user")
     }
     else{
      alert("Please enter email")
     }
   }
    return <>
      <div  className="singin-container">
          <div>
               <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png" alt=""  style={{width:"12%"}}/>
               <p>Sign in or create your account</p>

               <h4>Not sure if you have an account? <br />Enter your email and we’ll check for you.</h4>

               <form className="singin-form">
                  <label>Email Address</label> <br />
                  <input type="text" placeholder="Enter email " value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
                  <button onClick={handleSubmit}>Continue</button>
               <p className="security-script">Securing your personal information is our priority.</p>
               </form>
          </div>
      </div>
    </>
}
export {Signin}