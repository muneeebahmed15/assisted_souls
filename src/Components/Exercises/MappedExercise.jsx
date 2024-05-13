import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import img from "../../assets/img.jpeg"

const MappedExercise = ({ data1, data2}) => {
  return (
    <>
    

          <div>
       {data1.map((x,index)=>(
        <div key={index} className='row d-flex flex-row justify-content-center align-items-center mt-5'>

          <div className='col-md-4'>
            <img src={x.image} alt="" className='rounded' style={{width:"100%", height:"64vh"}} />
          </div>

          <div className='col-md-8'>
            <div className='d-flex justify-content-between'>
              <h3 className='text-700' style={{fontSize:"24px"}}>{x.name}</h3>
              <small className='text-400' style={{ filter: "saturate(50%)"}}>{x?.sets}</small>
            </div>
            <div className='text-400' style={{fontSize:"16px", textAlign:"justify", paddingLeft:"5px"}}>
            <p>{x.description1}</p>
            <p>{x?.description2}</p>
            <p>{x?.description3}</p>
             </div>
        </div>

    </div>
    ))}
    </div>

    <div>
    <div className='d-flex justify-content-between align-items-center p-3 mt-5 rounded text-white' style={{backgroundColor:"black"}}>
      <h3 className='text-700' style={{fontSize:"30px"}}>Alternate / Add-Ons <FaArrowRight size={15}/> </h3>
   
      <div>
        <img src={img} alt="logo" width={40} style={{borderRadius:"50%", opacity:"0.3"}}/>
        </div>
        </div>
     <div>
     {data2.map((x,index)=>(
        <div key={index} className='row d-flex flex-row justify-content-center align-items-center mt-5'>

          <div className='col-md-4'>
            <img src={x.image} alt="" className='rounded' style={{width:"100%", height:"64vh"}} />
          </div>

          <div className='col-md-8'>
            <div className='d-flex justify-content-between'>
              <h3 className='text-700' style={{fontSize:"24px"}}>{x.name}</h3>
              <small className='text-400' style={{ filter: "saturate(50%)"}}>{x?.sets}</small>
            </div>
            <div className='text-400' style={{fontSize:"16px", textAlign:"justify", paddingLeft:"5px"}}>
            <p>{x.description1}</p>
            <p>{x?.description2}</p>
            <p>{x?.description3}</p>
             </div>
        </div>

    </div>
    ))}
      </div>   

    </div>
    </>
  )
}

export default MappedExercise
