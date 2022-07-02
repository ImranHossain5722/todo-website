import React from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
    return (
        <div>
      <div className="hero min-h-screen bg-white ">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          
          <div className=''>
            <DayPicker 
                mode="single"
               
            
            />
          </div>
        </div>
      </div>
    
    </div>
    );
};

export default Calender;