import { Link,useNavigate } from "react-router-dom"
import "../Styling/Signin.css"
import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"

export function UserInfo(){
    let {email}=useContext(AuthContext)
    let [name,setName]=useState("")
    let [last,setLast]=useState("")
    let [phone,setPhone]=useState("")
    let [password,setPassoword]=useState("")
    let navigate=useNavigate()

    function handleSubmit(){
        localStorage.setItem("details",JSON.stringify({email,name,last,phone,password}))
        alert("User regiestered successfully")
        navigate("/login")
    }
    return <>
     <div  className="singin-container">
          <div>
               <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png" alt=""  style={{width:"12%"}}/>
               <p>Create your Walmart account</p>

                <p className="email-change-option">Email <br /><span style={{color:"blue",paddingRight:"5px"}}>{email}</span><span><Link to="/signin">Change</Link></span></p>
               

               <form className="singin-form">
                  <label>First name</label> <br />
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br />
                  <label>Last name</label> <br />
                  <input type="text" value={last} onChange={(e)=>setLast(e.target.value)}/>
                  <label>Phone number</label> <br />
                  <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                  <label>Password</label> <br />
                  <input type="password" value={password} onChange={(e)=>setPassoword(e.target.value)}/>
                  <button onClick={handleSubmit}>Continue</button>
               <p className="security-script">By clicking Continue, you acknowledge you have read and agreed to our Terms of Use and Privacy Policy. Message and data rates may apply. View our Mobile Alerts Terms.</p>
               </form>
          </div>
      </div>
    </>
}