import React, { useState } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/rea4real.png";
import "./Header.css"
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {

  const [isOpened, setIsOpened] = useState(false);
      
  const handelClick= ()=>{
    setIsOpened(!isOpened)
    console.log(isOpened);
  }
  return (
    <>
    <div id="btn" onClick={()=>handelClick()} className={isOpened&&"active"}>
                <div id='top'></div>
                <div id='middle'></div>
                <div id='bottom'></div>
            </div>

        <div id="box" className={isOpened?"active":""}  onClick={()=>handelClick()} >
        <img src={logo} alt="Marcado" />
            <div id="items">
                    <div className="item"><Link to='/' style={{color: "gray"}}>Home</Link></div>
                    <div className="item"><Link to='/products' style={{color: "gray"}}>Products</Link></div>
                    <div className="item"><Link to='/about' style={{color: "gray"}}>About</Link></div>
                    <div className="item"><Link to='/contact' style={{color: "gray"}}>Contact</Link></div>
                    <div className="icons">
                    <Link to='/search'  style={{color: "gray"}}><p className="icon"><FaSearch  /></p></Link>
                    <Link to='/cart' style={{color: "gray"}}><p className="icon"><FaShoppingCart /></p></Link>
                    <Link to='/login' style={{color: "gray"}}><p className="icon"><FaUserAlt /></p></Link>
                        
                        
                    </div>
            </div>
        </div>
    </>
  )
};

export default Header;