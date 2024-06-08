import { Link } from "react-router-dom"
import "../Styling/Signin.css"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
export function UserInfo(){
    let {email}=useContext(AuthContext)
    return <>
     <div  className="singin-container">
          <div>
               <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png" alt=""  style={{width:"12%"}}/>
               <p>Create your Walmart account</p>

                <p className="email-change-option">Email <br /><span style={{color:"blue",paddingRight:"5px"}}>{email}</span><span><Link to="/signin">Change</Link></span></p>
               

               <form className="singin-form">
                  <label>First name</label> <br />
                  <input type="text"/> <br />
                  <label>Last name</label> <br />
                  <input type="text"/>
                  <label>Phone number</label> <br />
                  <input type="text"/>
                  <label>Password</label> <br />
                  <input type="text"/>
                  <button>Continue</button>
               <p className="security-script">By clicking Continue, you acknowledge you have read and agreed to our Terms of Use and Privacy Policy. Message and data rates may apply. View our Mobile Alerts Terms.</p>
               </form>
          </div>
      </div>
    </>
}