import "../Styling/Home.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../Components/Navbar"
function Home(){
    let videoRef1=useRef(null)
    let videoRef2=useRef(null)
     let videoRef3=useRef(null)
     let videoRef4=useRef(null)
     let videoRef5=useRef(null)
     let videoRef6=useRef(null)
     let videoRef7=useRef(null)
     let videoRef8=useRef(null)
    return <>
    <Navbar/>
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

<div className="upgraded-items">
  <div className="upgraded-product-container">
    <div className="upgraded-heading">
      <div>
        <h3>Upgrade your screen time</h3>
        <p className="upgraded-desc">See it in pixel-perfect detail.</p>
      </div>
      <div>
        <Link className="viewAll-link">View all</Link>
      </div>
    </div>
    <div id="main">
      <div className="product1">
      <div className="product">
    <img src="https://i5.walmartimages.com/asr/24b60b5c-cdcb-445d-aa43-697acb108fa3.86166b3a3aacfebec76b558fb4be80fd.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="Product 6"/>
    <div class="heart">&#10084;</div>
    <div class="price">$455.65</div>
    <div className="product-title">VIZIO 40" Class Full HD 1080p LED Smart TV (New) VFD40M-08</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/4ee39d11-1221-4565-a907-26e7a47d6ed8.20766af67ece593d4adaefd5fc6586b9.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$435.76</div>
    <div className="product-title">VIZIO 50" Class 4K UHD LED HDR Smart TV (New) V4K50M-08</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/93a8f6b7-f517-4d64-8f3e-af272e148ffa.07275f81c2034781689b6b305253dd6a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$878.55</div>
    <div className="product-title">VIZIO 55" Class Quantum 4K QLED HDR Smart TV (NEW) M55Q6-L4</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/4ee39d11-1221-4565-a907-26e7a47d6ed8.20766af67ece593d4adaefd5fc6586b9.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$234.00</div>
    <div className="product-title">VIZIO 50" Class 4K UHD LED HDR Smart TV (New) V4K50M-08</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
  <img src="https://i5.walmartimages.com/asr/bf646920-4033-4c50-b278-dcff38d4d6e6.b17526e3036a7a824154a6cca07fc206.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$546.00</div>
    <div className="product-title">VIZIO 40" Class Full HD 1080p LED Smart TV (New) VFD40M-08</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
      <img src="https://i5.walmartimages.com/asr/14f7e719-4dff-4317-a94b-d7d44f9bdd19.9159fc532df53dcfaf0fae3e9ed41e7b.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$678.76</div>
    <div className="product-title">VIZIO 55" Class Quantum 4K QLED HDR Smart TV (NEW) M55Q6-L4 </div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/2700bac2-c3fb-4566-bdb5-62288c7dcb1f.4abec9d67eff5cf888d69fbefdcb81b0.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$234.00</div>
    <div className="product-title">VIZIO 50" Class 4K UHD LED HDR Smart TV (New) V4K50M-08</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/4f929b7f-1505-403c-adee-9339577af63c.509e9a286bc3ab98c2e030a7fd728bd1.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$232.6</div>
    <div className="product-title">VIZIO 55" Class Quantum 4K QLED HDR Smart TV (NEW) M55Q6-L4</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/05ee509d-14ff-46d4-90a4-8b1c5f71eaea.cc5231855335c3e9832c30d411672185.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$765.43</div>
    <div className="product-title">VIZIO 50" Class 4K UHD LED HDR Smart TV (New) V4K50M-08</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/9d2c0857-1a14-42ff-8aea-1ade44f9ac82.88f134a61a802892d9348449cbf8a72e.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$654.99</div>
    <div className="product-title">VIZIO 55" Class Quantum 4K QLED HDR Smart TV (NEW) M55Q6-L4 </div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
    </div>
  </div>
  <div className="upgraded-right">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-931d/k2-_1e736e6e-b24f-42c0-b21b-b05888c02cd3.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%",borderRadius:"3%"}}/>
    <p className="poster-image-heading"><span>Now playing in 4K </span><br /> <button>Shop TVs</button></p>
</div>
</div>

<div className="grid-container-1">
  <div className="gd11">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6174/k2-_79c901b0-52af-4e7f-9b9e-0270d44d7bfb.v1.jpg?odnHeight=658&odnWidth=658&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <p> Packing list? Check.</p>
     <h3>Adventure awaits</h3>
     <button>Shop travel</button>
    </div>
  </div>
  <div className="gd12">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-b735/k2-_8816b15a-8568-4017-889c-57572fc0d388.v1.jpg?odnHeight=292&odnWidth=512&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <p> Beauty on the fly</p>
     <h4>Travel-size is <br /> taking off</h4>
     <Link>Shop now</Link>
    </div>
  </div>
  <div className="gd13">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9005/k2-_e56a549f-8eff-4aa4-a3b2-87a03e22ab5b.v1.jpg?odnHeight=658&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <p>Road trip-ready</p>
     <h4>Essentials for every mile</h4>
     <Link>Shop now</Link>
    </div>
  </div>
  <div className="gd14">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5cc2/k2-_89ec0b5b-1b57-4a2c-a409-a1c75e28b01d.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>All a tiny tourist needs</h4>
     <Link>Shop baby</Link>
    </div>
  </div>
  <div className="gd15">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-bea2/k2-_939ed169-4677-45bb-bbb8-abb0fc37a3bb.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Up to $100 off travel gear</h4>
     <Link>Shop now</Link>
    </div>
  </div>
</div>

<div className="products-heading-and-show-all">
    <div>
        <h3>Prep for your getaway</h3>
        <p>All set for your best trip yet.</p>
    </div>
    <div>
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

<div className="upgraded-items">
  <div className="upgraded-product-container">
    <div className="upgraded-heading">
      <div>
        <h3>Cap toss, party on</h3>
        <p className="upgraded-desc">Gift ideas, decor & much more.</p>
      </div>
      <div>
        <Link className="viewAll-link">View all</Link>
      </div>
    </div>
    <div id="main">
      <div className="product1">
      <div className="product">
        <img src="https://i5.walmartimages.com/seo/4-Pcs-2024-Graduation-Party-Decorations-Class-Congrats-Grad-Centerpieces-Congratulate-Table-Toppers-High-School-College-Favor-Blue_fd4844a0-c2be-4d3c-844c-318f395d676f.04ffca101cc3fa5c46e71ea28f43fb53.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$455.65</div>
    <div className="product-title">4 Pcs 2024 Graduation Party Decorations Class of 2024 Congrats Grad Centerpieces Congratulate Graduation Table Toppers for High School College Graduation Party Favor, (Blue)</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/3d0e7fcc-adb4-44b8-be08-dc09abb8d723.01ce828c641f772b00d5818f3348b382.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$435.76</div>
    <div className="product-title">Hallmark Paper Wonder Musical Pop Up Graduation Card and Gift Card Holder (Plays Celebration)</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/4374545a-9051-493f-bfaa-cbf267b2b48b.bc86b65238d2885e21d7f00055dd2e2c.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$878.55</div>
    <div className="product-title">Graduation Thinking Of You Cookies, Candy &amp; More Care Package Snack Gift Box Bundle Set</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/df868327-c6b3-480a-b8cd-15075247d75f.bf7c8ee457ae944cb348a3c642e45145.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$234.00</div>
    <div className="product-title">Hallmark 9" Medium Graduation Gift Bag with Tissue Paper (Gold and Silver Mortarboards on Black) for College, High School, 8th Grade, Kindergarten</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
  <img src="https://i5.walmartimages.com/asr/5b705104-65e3-471f-a032-9f30f8aaaeef.baee7b4fb28be424a9e36677b7ccc752.png?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$546.00</div>
    <div className="product-title">Glaring Grad Walmart eGift Card</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
      <img src="https://i5.walmartimages.com/asr/5158bbdc-5d43-4313-867f-4dd4f2168e1b.fe0a6fa9fd5adf881e4d87de042e15b9.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$678.76</div>
    <div className="product-title">Fresh-Cut Extra Large Mixed Flower Bouquet, Minimum of 17 Stems, Colors Vary</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/8a37f74c-328c-41e7-a5ed-65ea4111adfa.385aa1933eb8d0a8dd35b47da84dcccf.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$234.00</div>
    <div className="product-title">Carpe Every Diem : The Best Graduation Advice from More Than 100 Commencement Speeches : A Graduation Book (Hardcover)</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/3d69a4da-dce7-482f-93a6-f156298fffe1.4b4f2702369ed9b3327ebf3698f58b96.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$232.6</div>
    <div className="product-title">Hallmark Paper Wonder Pop Up Graduation Card (A Time to Celebrate)</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
      <div className="product1">
      <div class="product">
        <img src="https://i5.walmartimages.com/asr/bc3ff28a-bb99-4f6c-b34f-f3800922aefc.6c0526b8ff0936cb4f9cc3a0c195f72e.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
    <div class="heart">&#10084;</div>
    <div class="price">$765.43</div>
    <div className="product-title">Congratulations Walmart Gift Card</div>
    <a href="#" class="options">+ Add</a>
    </div>
      </div>
    </div>
  </div>
  <div className="upgraded-right">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-c9be/k2-_68a4212e-29d7-46e3-a98e-3d2d9a46477b.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%",borderRadius:"3%"}}/>
    <p className="poster-image-heading"><span style={{fontSize:"16px"}}>Congrats, Class of ’24</span><br /><span>Let’s celebrate</span><br /> <button>Shop now</button></p>
</div>
</div>



<div className="products-heading-and-show-all">
    <div>
        <h3>Trending on social</h3>
        <p>Shop what creators are sharing.</p>
    </div>
    <div>
    </div>
</div>
   <div id="main" className="video-thumbnails">
  <div class="product">
    <video src="https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/2a11f2e0-d167-48c6-9791-261f8538e8e2/transcode/f6ca0070-2a7e-4a7c-b304-31aacb7e469f/720x1280_PROGRESSIVE_500.mp4" style={{height:"88%",width:"100%"}} muted ref={videoRef1}  onMouseOver={()=>videoRef1.current.play()} onMouseOut={()=>videoRef1.current.pause()}/>   
    <div className="below-container-video-clip">
    <div style={{width:"40%"}}>
      <img src="https://i5.walmartimages.com/asr/dcdb7ae8-173d-4a99-9421-89c2c961130f.aa7db49c1431a374d69eaa3271537e62.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF" alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div className="videos-description">
      <h3>$243</h3>
      <p>23In Artificial Boston Fern Large Hanging Plant, Set of 2 Artificial Ferns </p>
    </div>
  </div>
  </div>
  <div class="product">
  <video src="https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/9694a685-b3ad-4226-93d7-61f70abf4c39/transcode/00696167-8ff4-4e0c-af0e-f16b041d9d18/720x1280_PROGRESSIVE_739.mp4" style={{height:"88%",width:"100%"}} muted ref={videoRef3}  onMouseOver={()=>videoRef3.current.play()} onMouseOut={()=>videoRef3.current.pause()}/>
  <div className="below-container-video-clip">
    <div style={{width:"40%"}}>
      <img src="https://i5.walmartimages.com/seo/5-ft-Artificial-Olive-Plants-Realistic-Leaves-Natural-Trunk-Silk-Fake-Potted-Tree-Wood-Branches-Fruits-Faux-Office-Home-Decor_a880dc67-20d8-4948-ad44-36c24f50b1c9.4699cbbb5ab4cec8565b8a0e868c893d.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF" alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div className="videos-description">
      <h3>$104</h3>
      <p>5 ft Artificial Olive Plants with Realistic Leaves and Natural Trunk for Office</p>
    </div>
  </div>
  </div>
  <div class="product">
  <video src="https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/c5ac953a-d10c-41f4-9b83-a5c9da0ffe66/transcode/5e1d5ce2-064c-4aa1-91a6-c7c7a1436de1/720x1280_PROGRESSIVE_d37.mp4" style={{height:"88%",width:"100%"}} muted ref={videoRef7}  onMouseOver={()=>videoRef7.current.play()} onMouseOut={()=>videoRef7.current.pause()}/>
  <div className="below-container-video-clip">
    <div style={{width:"40%"}}>
      <img src="https://i5.walmartimages.com/seo/iFLY-Softside-Accent-20-Carry-on-Luggage-Black-Lime-Green_9bd8fb53-29ff-4873-a4a6-5b049c14efca.ac6aa5afacf47f4f75fe4d34bf19f0a8.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF" alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div className="videos-description">
      <h3>$500</h3>
      <p>Ifly Softside Accent 20 inch Carry-on Luggage, Black/Lime Green</p>
    </div>
  </div>
  </div>
  <div class="product">
  <video src="https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/8a83157f-aa79-4bdc-a208-263df82881ab/transcode/b6de3133-4c37-46f2-9f4b-d03c0cd13439/720x1280_PROGRESSIVE_0d5.mp4" style={{height:"88%",width:"100%"}} muted ref={videoRef8}  onMouseOver={()=>videoRef8.current.play()} onMouseOut={()=>videoRef8.current.pause()}/>
  <div className="below-container-video-clip">
    <div style={{width:"40%"}}>
      <img src="https://i5.walmartimages.com/seo/No-Boundaries-Women-s-Raffia-Double-Band-Platform-Sandals_f69bef72-78a5-41e5-b4a7-a77aeedc00bf.abe03c0b7cd62b9f91e6ab0c010b3df6.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF" alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div className="videos-description">
      <h3>$234</h3>
      <p>No Boundaries Women's Raffia Double Band Platform Sandals, Size: 8, Beige</p>
    </div>
  </div>
  </div>
  <div class="product">
  <video src="https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/16b79483-92fa-45b1-9a22-3f936546977e/transcode/6f64e8d8-681d-487c-87c2-9bb5b2b66952/720x1280_PROGRESSIVE_097.mp4" style={{height:"86%",width:"100%"}} muted ref={videoRef4}  onMouseOver={()=>videoRef4.current.play()} onMouseOut={()=>videoRef4.current.pause()}/>
  <div className="below-container-video-clip">
    <div style={{width:"40%"}}>
      <img src="https://i5.walmartimages.com/asr/46c9d2e0-0826-4f2a-a05c-99b286fef801.620694e96f0ad41a5300a0db16eb6fdc.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF" alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div className="videos-description">
      <h3>$49</h3>
      <p>MInc.redible, Lavender Scented Heated Over-Eye Mask</p>
    </div>
  </div>
  </div>
  <div class="product">
  <video src="https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/2bee665a-ec6c-44b1-af5c-303e098c7b22/transcode/66b0eb97-43b6-420e-8755-814804dfa007/720x1280_PROGRESSIVE_a71.mp4" style={{height:"86%",width:"100%"}} muted ref={videoRef5}  onMouseOver={()=>videoRef5.current.play()} onMouseOut={()=>videoRef5.current.pause()}/>
  <div className="below-container-video-clip">
    <div style={{width:"40%"}}>
      <img src="https://i5.walmartimages.com/asr/58a15062-023b-4375-a581-08a754cf16dc.63f7c092551e5697d5636033759d84cf.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF" alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div className="videos-description">
      <h3>$210</h3>
      <p>Better Homes &amp; Gardens -Cocktail Shaker Black &amp; Rattan</p>
    </div>
  </div>
  </div>
  <div class="product">
    <video src="https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/85d07533-db2c-4cae-8f32-0374464cf493/transcode/ed855e4e-e0d1-4ac0-94a6-c0ef09a5a410/720x1280_PROGRESSIVE_5bb.mp4" style={{height:"88%",width:"100%"}} muted ref={videoRef2}  onMouseOver={()=>videoRef2.current.play()} onMouseOut={()=>videoRef2.current.pause()}/>
    <div className="below-container-video-clip">
    <div style={{width:"40%"}}>
      <img src="https://i5.walmartimages.com/asr/d240b2f6-5536-41bd-99ff-dc059524d9de.c418a6ba2c708840d7878a5a19820fe7.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF" alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div className="videos-description">
      <h3>$599</h3>
      <p>Vaseline Healing Jelly For Dry Skin and Eczema Relief Original 100% Pure Petroleum Jelly 1.75 oz, Size: 1.7 oz, Blue</p>
    </div>
  </div>
  </div>
  <div class="product">
  <video src="https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/215afc37-2474-4577-a1a8-489197e62d55/transcode/1163e8dd-7fa7-4ef7-8d5d-f9c1a55a4b1d/720x1280_PROGRESSIVE_405.mp4" style={{height:"90%",width:"100%"}} muted ref={videoRef6}  onMouseOver={()=>videoRef6.current.play()} onMouseOut={()=>videoRef6.current.pause()}/>
  <div className="below-container-video-clip">
    <div style={{width:"40%"}}>
      <img src="https://i5.walmartimages.com/asr/0f8db6e0-d594-4aa3-9f25-77b11d977ce4.0949b1a7a94d3b67b3f2ac52807b232f.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF" alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div className="videos-description">
      <h3>$430</h3>
      <p>Mainstays 3-Wick Wrapped Hidden Springs Scented Candle, 13 oz, Size: 13-Ounce</p>
    </div>
  </div>
  </div>
</div>

<div className="products-heading-and-show-all">
    <div>
        <h3>Get it all right here</h3>
    </div>
    <div>
      <Link>View all</Link>
    </div>
</div>

<div id="main" className="prodcut-brands">
  <div class="product">
   <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6406/k2-_987b6e28-ac24-4c30-a150-afe57033daf2.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
   <p>Grocery</p>
  </div>
  <div class="product">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-8370/k2-_15a0a4d2-1619-4914-94cd-774567d41404.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
    <p>Home</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-16a3/k2-_f9b2f53c-a2c0-40bf-8e25-692c544b3baf.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Pation & Garden</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-48f6/k2-_7aed4b13-f076-4785-8b0c-2a8343c2b70c.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Fashion</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9674/k2-_cd6b8be4-8bfb-47bc-9843-49e8ed571106.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Electronics</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-648f/k2-_c76e7139-cecb-4d48-893d-686d9bbbbfbe.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Baby</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6897/k2-_9d771225-ddc0-4ae4-8302-1921a8ace961.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Toys</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-db33/k2-_76752a43-1765-455e-85d2-16a450d8ff5a.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Health & wellness</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-2281/k2-_240ae09f-fd48-4b80-aa8d-7bbed28ae7ea.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Personal Care</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5ae9/k2-_d40ab856-ee32-437c-9a44-c9b93df4aff0.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Beauty</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-e091/k2-_5abd632e-14d1-44b2-8361-fd23d6198365.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Auto % tires</p>
  </div>
  <div class="product">
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-a077/k2-_02b361d9-ab7b-45e9-95fb-3060dd6be190.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" style={{width:"100%"}}/>
  <p>Home Improvement</p>
  </div>
</div>


<div className="grid-container-1">
  <div className="gd11">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-98f7/k2-_76d1de2f-7fd4-4fed-b27e-ccc2ef8cc715.v1.jpg?odnHeight=658&odnWidth=658&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <p> Summer fun for kids.</p>
     <h3>Build memories</h3>
     <button>Shop toys</button>
    </div>
  </div>
  <div className="gd12">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-2906/k2-_da3e761f-f6ec-4576-9387-0459ea8f49e5.v1.jpg?odnHeight=292&odnWidth=512&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Roll on bike: <br />more</h4>
     <Link>Shop now</Link>
    </div>
  </div>
  <div className="gd13">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-fc70/k2-_97b8da04-e838-4ef6-b21f-151927d92f9f.v1.jpg?odnHeight=658&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Get crafty with tie-dye & more</h4>
     <Link>Shop now</Link>
    </div>
  </div>
  <div className="gd14">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d110/k2-_3b616dde-2406-4e49-99e2-8a17693ff8c1.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Let's e-learn</h4>
     <Link>Shop tablets</Link>
    </div>
  </div>
  <div className="gd15">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-a5bf/k2-_a05a0112-b3f2-41cd-8ade-4bfc77f429ba.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Splash. Play Yey!</h4>
     <Link>Shop now</Link>
    </div>
  </div>
</div>

<div className="products-heading-and-show-all">
    <div>
        <h3>Endless entertainment</h3>
        <p>Tech & toys to fill their days.</p>
    </div>
    <div>
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

<div className="walmart-profit">
   <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6680/k2-_677e1794-abed-41c7-b8b4-062dc618e0d4.v1.png?odnHeight=48&odnWidth=61&odnBg=&odnDynImageQuality=70" alt="" />
   <p>Earn 3% cash back on Walmart.com</p>
   <button>Learn more</button>
</div>


<div className="grid-container-1">
  <div className="gd11">
    
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-bfd5/k2-_350cb98c-f275-4cb9-8280-7b8114af334b.v1.jpg?odnHeight=658&odnWidth=658&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <p>Get up to speed.</p>
     <h3>Schedule oil changes</h3>
     <button>Shop now</button>
    </div>
  </div>
  <div className="gd12">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-f0e5/k2-_9ef9d7d0-99e2-4b7b-a218-35ef58cfede4.v1.jpg?odnHeight=292&odnWidth=512&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
      <p>Leave it to the pros</p>
     <h4>They assemble. <br />You relax.</h4>
     <Link>Learn more</Link>
    </div>
  </div>
  <div className="gd13">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-2f61/k2-_a1210783-801a-4599-a6bb-07749387c560.v1.jpg?odnHeight=658&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
      <p>Everyday essentials</p>
     <h4>Subscribe now</h4>
     <Link>Learn more</Link>
    </div>
  </div>
  <div className="gd14">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-1fe1/k2-_0decdb24-dd1d-4355-a533-2032e7d62cdf.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Gift card-Dad's choice</h4>
     <Link>Shop now</Link>
    </div>
  </div>
  <div className="gd15">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-b0ad/k2-_c7323af6-fb59-403a-8262-3b549284a4ce.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Debit with rewards</h4>
     <Link>Learn more</Link>
    </div>
  </div>
</div>

<div className="products-heading-and-show-all">
    <div>
        <h3>Top subscription picks</h3>
        <p>Keep ’em coming.</p>
    </div>
    <div>
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


<div className="grid-container-1">
  <div className="gd11">
    
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-bfa9/k2-_02fbb7e6-485a-43f9-87ad-31c7b09676e2.v1.jpg?odnHeight=658&odnWidth=658&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h3>Pride Always belongs</h3>
     <button>Shop now</button>
    </div>
  </div>
  <div className="gd12">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-e504/k2-_8e18fc1a-3662-44c2-9b9a-87c84bffd710.v1.jpg?odnHeight=292&odnWidth=512&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
      <p>LGBTQIA + founded</p>
     <h4>Active & swimware for all</h4>
     <Link>Shop now</Link>
    </div>
  </div>
  <div className="gd13">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d214/k2-_f003ba8a-8432-4a93-ad7e-ba11fa98686c.v1.jpg?odnHeight=658&odnWidth=385&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
      <p>Only at walmart</p>
     <h4>Hottest LGBTQIA + founded brands</h4>
     <Link>Shop now</Link>
    </div>
  </div>
  <div className="gd14">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9b2f/k2-_4b7e727f-ce53-4bea-ab70-58ab5fbf7b68.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Celebrate your pride</h4>
     <Link>Shop now</Link>
    </div>
  </div>
  <div className="gd15">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-fd2d/k2-_f3726aa6-b082-45c3-9522-faf4f3066d8a.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70" alt="" style={{width:"100%",height:"100%"}}/>
    <div className="product-thumbnail-information">
     <h4>Summer looks. Be you.</h4>
     <Link>Shop now</Link>
    </div>
  </div>
</div>



<div className="products-heading-and-show-all">
    <div>
        <h3>More LGBTQIA+ brands</h3>
        <p>Celebrate all year long.</p>
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

<div className="give-feedback">
  <p>We’d love to hear what you think!</p>
  <button>Give feedback</button>
</div>
    </>
}
export default Home