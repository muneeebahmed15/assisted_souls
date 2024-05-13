import React from 'react'
import img from "../../../assets/img.jpeg"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'



const Footer = () => {
  return (
    <>
   
   <div style={{position:"relative", marginTop:"20px"}}>
      <img src={img} alt="" style={{width:"100%", height:"200px"}} />
      
      <div style={{position:"absolute", bottom:"35%",width:"100%"}}>
        <div className='d-flex align-items-center justify-content-between container px-5'>
        
        <div className='d-flex flex-column text-white'>
          <span className='text-700' style={{fontSize:"30px"}}>Get Information</span>
          <small>Subscribe our newsletter and get information to email</small>
        </div>

          <div className='d-flex'>
            <input type="text" placeholder='Enter your email...' className='text-700 p-2 border-0' style={{marginRight:"8px", fontSize:"14px"}}/>
            <button className='text-white text-700 px-2 border-0' style={{backgroundColor:"#FB5B21", fontSize:"12px", letterSpacing:"2px"}}>SIGN UP</button>
          </div>
          </div>
      </div>


   </div>

      <div className='bg-custom'>
    <div className='d-flex text-500 justify-content-between container align-items-center py-2 text-white mt-1' style={{fontSize:"13px"}}>
      <div>
        <img src={img} alt="" width={30} style={{borderRadius:"100%"}} />
      </div>

      <div>
        <small >&copy; Copyright 2024 – Mealrescue Develop by Sun Skill Tech</small>
      </div>

        <ul className="d-flex" style={{listStyle:"none", margin:0, padding:0}}>
          <li style={{paddingRight:"12px"}}>Contact Us</li>
          <li style={{paddingRight:"12px"}}>Privacy Policy</li>
          <li style={{paddingRight:"12px"}}>Terms & Conditions</li>
        </ul>


        <div className='d-flex'>
        <div className='border rounded-circle p-1 m-1'>
        <FaTwitter style={{width:"18px"}}/>
        </div>

        <div className='border rounded-circle p-1 m-1'>
        <FaInstagram style={{width:"18px"}}/>
        </div>

        <div className='border rounded-circle p-1 m-1'>
        <FaFacebook style={{width:"18px"}}/>
        </div>

        </div>

    </div>
    </div>
    </>
  )
}

export default Footer
