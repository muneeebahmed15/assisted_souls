import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import img from "../../assets/img.jpeg"

const ContactForm = () => {
  return (
    <>
    <div className='row my-5 border border-1 border-dark rounded' style={{margin: "0px 80px"}}>
      <div className='col bg-custom text-white rounded'>
          <div className='d-block px-3 my-4'>
            <h1 className='text-700'>CONTACT US</h1>
            <p className='text-400'>If you have any questions, comments or feedback, please don't hesitate to contact us by filling out the form below. We'll get back to you asap. </p>

              <div style={{marginTop:"90px"}}>
              <p>Reach Out To Us At:</p>
              <b>info@assistedsouls.com</b>
              </div>

        <div className='d-flex align-items-center justify-content-between' style={{marginTop:"150px"}}>
          <div className='d-flex'>
        <div className='border rounded-circle p-1 m-1'>
        <FaTwitter style={{width:"20px"}}/>
        </div>

        <div className='border rounded-circle p-1 m-1'>
        <FaInstagram style={{width:"20px"}}/>
        </div>

        <div className='border rounded-circle p-1 m-1'>
        <FaFacebook  style={{width:"20px"}}/>
        </div>
        </div>

        <div>
        <img src={img} alt="" width={50} style={{borderRadius:"50%"}} />
      </div>
        </div>

          </div>
      </div>

      <div className='col d-flex flex-column p-5'>
        <div className='d-flex flex-column '>
          <label className='text-700' style={{fontSize:"20px"}}>Name</label>
          <input type="text" placeholder='Enter Your Name Here' style={{padding:"9px", paddingLeft:"15px"}}/>
        </div>
        
        <div className='d-flex flex-column mt-3'>
          <label className='text-700' style={{fontSize:"20px"}}>Email *</label>
          <input type="email" placeholder='Enter Your Email Here' style={{padding:"9px", paddingLeft:"15px"}}/>
        </div>
        
        <div className='d-flex flex-column mt-3'>
          <label className='text-700' style={{fontSize:"20px"}}>Subject</label>
          <input type="text" placeholder='Enter Your Subject Here' style={{padding:"9px", paddingLeft:"15px"}}/>
        </div>

        
        <div className='d-flex flex-column mt-3'>
          <label className='text-700' style={{fontSize:"20px"}}>Message</label>
          <textarea type="text" placeholder='Enter Your Message Here' style={{padding:"9px", paddingLeft:"15px"}}/>
        </div>

        <div className='mt-3 '>
          <button className='text-white bg-custom py-2 px-5 rounded border'><b>Send Message</b></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactForm