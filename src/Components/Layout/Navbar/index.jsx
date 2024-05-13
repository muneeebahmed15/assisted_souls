import React from 'react';
import { LiaSearchSolid } from "react-icons/lia";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import img from "../../../assets/img.jpeg"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='bg-custom'>

    <nav className='d-flex container  justify-content-between align-items-center p-3 text-white'>

        <div>
        <img src={img} alt="logo" width={30} style={{borderRadius:"50%"}}/>
        </div>

            <div>
            <ul className='d-flex' style={{ listStyle: 'none', margin: 0, padding: 0}}>
               <Link to={"/"} className='text-decoration-none text-white'> <li style={{paddingRight:"30px"}}>Home</li>      </Link>
               <Link to={"/gym-split"} className='text-decoration-none text-white'> <li style={{paddingRight:"30px"}}>Gym Split</li></Link>
               <Link to={""} className='text-decoration-none text-white'> <li style={{paddingRight:"30px"}}>Shop</li></Link>
               <Link to={"/contact"} className='text-decoration-none text-white'> <li style={{paddingRight:"30px"}}>Contact</li></Link>
            </ul>
            </div>

        <div>
        <LiaSearchSolid size={20} className='border-bottom border-2'/> &nbsp;
        <FaUserCircle size={20} style={{gap:"10px"}} className='border-bottom border-2'/> &nbsp;
        <BiSolidShoppingBags size={20} style={{gap:"10px"}} className='border-bottom border-2'/>
        </div>

    </nav>

    </div>
    </>
  )
}

export default Navbar