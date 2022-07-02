import React from "react";
import Photo from "../../Assets/images/calendar.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const LastSection = () => {
  return (
    <div>
        
      <div class="hero min-h-screen bg-base-100">
     
        <div class="hero-content flex-col lg:flex-row">
            
          <div className="px-12">
          <h1 className="text-center text-xl">Our Calender </h1>
          <progress class="progress w-6 "></progress>
          <div className=''>
            <DayPicker 
                mode="single"
               
            
            />
          </div>
          </div>
          <img src={Photo} class=" max-w-md rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
