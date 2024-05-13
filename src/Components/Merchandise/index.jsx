import React from 'react'
import img from "../../assets/img.jpeg";

const Merchandise = () => {
  return (
    <>
    <div className='flex justify-content-center align-items-center custom-container' style={{marginTop:"70px"}}>
        <div className='text-center'>
            <span className='text-700' >Merchandise</span>
            <p className='text-400' style={{marginTop:"16px"}}>Explore our exclusive merchandise selection, tailored to elevate your gym experience. <br />
                Premium quality gear designed to accompany you on your fitness journey.</p>
        </div>

        <div style={{position:"relative"}}>
            <img src={img} alt="" style={{width:"100%", height:"500px"}} className='rounded'  />

            <div style={{position: "absolute", bottom:"10%", left:"7%"}} className='text-white'>
            <span className='text-700' style={{fontSize:"50px"}}>As no.1 - <br/> "Pump Cover"</span><br />
            <button style={{background:"transparent"}} className='px-4 py-2 text-white border border-2 custom-btn2'>Show Now</button>
        </div>
        </div>

        <div className='row' style={{marginTop:"16px"}}>

            <div className='col-md-4'>
                <img src={img} alt="" width={338} className='rounded'/>
            </div>

            <div className='col-md-4'>
                <img src={img} alt="" width={338} className='rounded' />
            </div>

            <div className='col-md-4'>
                <img src={img} alt="" width={337} className='rounded' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Merchandise