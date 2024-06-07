import "../Styling/Navbar.css"
import Logo from "../assets/favicon.png"
function Navbar(){

    return <>
    <div style={{position:"fixed",zIndex:"1"}}>
    <div id="container">
          
                <div className="logo">
                <img src={Logo} alt="" style={{width:"60%"}}/>
                </div>
                <div className="addressing">
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" alt="" style={{width:"80%"}}/>
                    </div>
                    <div>
                        <div>
                        <h4>How do you want your items?</h4>
                        <p>Sacramento, 95829 . Sacramento </p>
                        </div>
                    </div>
                </div>
                <div className="searching">
                    <input type="text" placeholder="Search everything at Walmart online an it store" />
                </div>
                <div className="my-items">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" style={{width:"60%"}}/>
                    </div>
                    <div>
                        <p>Reorder</p>
                        <h4>Items</h4>
                    </div>
                </div>
                <div className="account">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/10479/10479887.png" alt="" style={{width:"80%"}}/>
                    </div>
                    <div>
                        <p>Sign in</p>
                        <h4>Account</h4>
                    </div>
                </div>
                <div className="cart">
                    <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="" style={{width:"35%"}}/>
                    <p>$0.00</p>
                </div>
           
    </div>
    <div id="nav-items">
        <div>Departments</div>
        <div>Services</div>
        <div>|</div>
        <div>Deals</div>
        <div>Grocery & Essentials</div>
        <div>Father's Day</div>
        <div>Graduation</div>
        <div>Summer Style</div>
        <div>National Pet Month</div>
        <div>Home</div>
        <div>Fashion</div>
        <div>Patio & Garden</div>
        <div>Registry</div>
    </div>
    </div>
    </>
}
export default Navbar