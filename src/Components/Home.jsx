import "../Styling/Home.css";
import { Link } from "react-router-dom";
function Home(){

    return <>
<div className="grid-container">
        <div className="item1">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6776/k2-_0da2f490-c265-406a-b134-7952669f5319.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70" alt=""  style={{height:"100%",width:"100%"}}/>
            <p><span style={{fontWeight:"100"}}>Entertain with ease</span> <br /><span style={{fontSize:"3.5rem",fontWeight:"300"}}>Host alfresco</span> <br /> <span><button>Shop now</button></span></p>
        </div>
        <div className="item2">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-cb8a/k2-_94ac40df-b5fa-4a27-a107-693b158d0d8e.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{height:"100%",width:"100%"}}/>
            <p>Patio style <br />without the <br />splurge <br /> <span><Link>Shop now</Link></span></p>
        </div>
        <div className="item3">
             <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d01e/k2-_1a128e56-6607-43be-968a-88314179d271.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70" alt=""  style={{height:"100%",width:"100%"}}/>
             <p>Dive into new looks <br /> <span><Link>Shop swim</Link></span></p>    
        </div>  
        <div className="item4">
        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-fb99/k2-_4466e31b-aab6-4224-9214-8c42e9fb1cd4.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
        <p>Break the Love x Walmart <br /> <span><Link>Learn more</Link></span></p> 
        </div>
        <div className="item5">
           <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-676e/k2-_2c020388-a930-43cb-8d24-304af512feac.v1.jpg?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}} />
           <p>Budget-friendly bikes. Ding! <br /> <span><Link>Learn more</Link></span></p> 
        </div>
        <div className="item6">
        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-afe1/k2-_cce7bdc5-de76-4e85-bf04-c3359eb94d07.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}} />
        <p>Father's Day <br />is June 16 <br /> <span><Link>Shop gifts</Link></span></p> 
        </div>
        <div className="item7">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-21d7/k2-_010ce435-9cfa-4871-98d9-b58993dee070.v1.jpg?odnHeight=216&odnWidth=794&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}} />
            <p>Walmart+ members save big with free <br />delivery from  stores <br /><span className="terms-apply">Terms apply.</span> <br /> <span><Link>Join walmart+</Link></span></p> 
        </div>
        <div className="item8">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9764/k2-_bb46d858-f5c5-4bf9-96db-9c656d01e7cd.v1.jpg?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70" alt=""  style={{width:"100%",height:"100%"}} />
        <p>Up to 40% off <br /> <span><Link>Shop now</Link></span></p> 
        </div>
        <div className="item9">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-963b/k2-_64ec434a-88cf-41fc-a808-dc31536228ae.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
            <p>Heat it up: Solo Stove & more <br /> <span><Link>Shop firepits</Link></span></p> 
        </div>
        <div className="item10">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6e56/k2-_794db8c2-5aaa-4226-bbe2-1330e08377c6.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{height:"100%",width:"100%"}}/>
            <p style={{color:"white"}}>Cool pools, hot prices <br /> <span><Link style={{color:"white"}}>Shop now</Link></span></p> 
        </div>
</div>
<div className="products-heading-and-show-all">
    <div>
        <h3>Flash Deals</h3>
        <p>Up to 65% off</p>
    </div>
    <div>
        <Link>View all</Link>
    </div>
</div>
   <div id="main">
  <div class="product">
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product 1"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $474.00</div>
    <div class="old-price">$599.00</div>
    <div className="product-title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Product 2"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $16.99</div>
    <div class="old-price">$49.99</div>
    <div className="product-title">Mens Casual Premium Slim Fit T-Shirts</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Product 3"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $16.99</div>
    <div class="old-price">$135.00</div>
    <div className="product-title">Mens Cotton Jacket</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="Product 4"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $514.75</div>
    <div class="old-price">$729.00</div>
    <div className="product-title">Mens Casual Slim Fit</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="Product 5"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $79.99</div>
    <div class="old-price">$169.99</div>
    <div className="product-title">Gold & Silver Dragon Station Chain Bracelet</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="Product 6"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $31.99</div>
    <div class="old-price">$55.99</div>
    <div className="product-title">Solid Gold Petite Micropave</div>
    <a href="#" class="options">Options</a>
  </div>

  <div class="product">
    <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="Product 6"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $31.99</div>
    <div class="old-price">$55.99</div>
    <div className="product-title">White Gold Plated Princess</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="Product 6"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $31.99</div>
    <div class="old-price">$55.99</div>
    <div className="product-title">Pierced Owl Rose Gold Plated Stainless Steel Double</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="Product 6"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $31.99</div>
    <div class="old-price">$55.99</div>
    <div className="product-title">WD 2TB Elements Portable External Hard Drive - USB 3.0</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="Product 6"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $31.99</div>
    <div class="old-price">$55.99</div>
    <div className="product-title">SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</div>
    <a href="#" class="options">Options</a>
  </div>
  <div class="product">
    <img src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" alt="Product 6"/>
    <div class="heart">&#10084;</div>
    <div class="price">Now $31.99</div>
    <div class="old-price">$55.99</div>
    <div className="product-title">Silicon Power 256GB SSD </div>
    <a href="#" class="options">Options</a>
  </div>
</div>
    </>
}
export default Home