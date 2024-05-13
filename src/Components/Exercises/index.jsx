import React, { useState } from 'react';
import img from "../../assets/img.jpeg";
import { ChestAddOns, ChestBackList, LegsAddOns, LegsList, ShoulderAddOns, ShoulderArmList } from '../../assets/ExercisesList';
import MappedExercise from './MappedExercise';


const Exercises = () => {
  const [chest, setChest] = useState(true);
  const [shoulder, setShoulder] = useState(false);
  const [legs, setLegs] = useState(false);

  const chestHandler = ()=>{
    setChest(true);
    setShoulder(false);
    setLegs(false);
  }

  const shoulderHandler = ()=>{
    setChest(false);
    setShoulder(true);
    setLegs(false);
  }

  const legsHandler = ()=>{
    setChest(false);
    setShoulder(false);
    setLegs(true);
  }

  // console.log(chest,"chest");
  // console.log(shoulder,"shoulder");
  // console.log(legs,"legs");

  return (
    <div>
    <div style={{backgroundColor:"black"}}>
    <div className='container'>
    <div className='row py-5'>
      <div className='col-md-5'>
        <img src={img} alt="" className="rounded" style={{display: "block", marginLeft: "auto", marginRight: "auto", width:"100%", height:"100%"}} />
      </div>

      <div className='col-md-7 text-white'>
        <h1 className='text-700'>My Current Gym Split</h1>
        
        <p className='text-400'>I want to update/reiterate rep ranges for exercises and how I try and break it down throughout this split. I go into every exercise with the intention of pushing till failure, wether it's 6-8 or 12 reps (my final rep I can barely move the weight). However, often for SBD (Squat,Bench,Deadlift) I'm going for a 1 rep max which is the only case where I won't attempt another rep for injury purposes. Otherwise, I keep strict form and work through every movement till failure. My version of failure (so that it's properly expressed) is pushing until I can't even move the weight, working out this way I've found consistent growth as I continuously find myself pushing past my limits and raising my own standards for myself.</p><br />
       
        <p className='text-400'>Constantly seek discomfort and growth in every way and learn from your mistakes.The rest of my split below is a compilation of the workouts I enjoy the most and have tried to perfect throughout the years. It's all very subjective and throughout the "fitness industry" there's a lot of "controversy" on what's right and wrong, etc. I personally believe that (especially starting off) you shouldn't overcomplicate everything. ENJOY it first, ease into it (at your own pace) and try different things.</p><br />
        
        <p className='text-400'>Stay consistent and focused on the goals you've set for yourself. Remember growth is never linear, sometimes you'll have bad days, uncontrollable obstacles and forks in your path. </p><br />
        
        <p className='text-400'>Feel free to reach out regarding anything. </p>
     
      </div>

      </div>     
    </div>
    </div>

{/* buttons for workouts */}
    <div>
    <div className='d-flex justify-content-center mt-5'>
      <div>
        <button className={`custom-btn ${chest ? "active-btn" : ""}`} onClick={chestHandler}>Chest and Back Workouts</button>
      </div>

      <div>
        <button className={`custom-btn ${shoulder ? "active-btn" : ""}`} onClick={shoulderHandler}>Shoulder and Arms</button>
      </div>
      
      <div>
        <button className={`custom-btn ${legs ? "active-btn" : ""}`} onClick={legsHandler}>Legs</button>
      </div>
    </div>
    </div>

{/* exercises mapped */}
<div className='container'>
   <div className='d-flex align-items-center mt-5 border-bottom border-2'>
   <h1 className='text-700' style={{fontSize:"80px",marginRight:"30px"}}>{chest ? "01" : shoulder ? "02" : legs ? "03" :""}</h1>
   <div className='d-flex justify-content-between align-items-center' style={{width:"100%"}}>
      <h1 className=' text-700'  style={{fontSize:"30px"}}>{chest ? "Chest And Back Workouts" : shoulder ? "Shoulder And Arms" : legs ? "Legs" :""}</h1>

      <div>
        <img src={img} alt="logo" width={40} style={{borderRadius:"50%", filter: 'saturate(70%)'}}/>
        </div>
        </div>
        </div>
   <MappedExercise  data1={chest ? ChestBackList : shoulder ? ShoulderArmList : legs ? LegsList :""} data2={chest ? ChestAddOns : shoulder ? ShoulderAddOns : legs ? LegsAddOns: ""}/>
   </div>

    </div>
  )
}

export default Exercises