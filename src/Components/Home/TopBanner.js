import React from "react";
import Photo from "../../Assets/images/topBanner.png";

const TopBanner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
         
          <div className="px-12">
            <h1 class="text-7xl font-bold text-left pb-2">Manage Your</h1>
            <h1 class="text-7xl font-bold text-left">Daily To-Do</h1>
            <p class="py-6 text-left">
            All the features of Super ToDOList work together so that you can work more.
            </p>
        
            
          </div>
          <img
            src={Photo}
            class=" max-w-lg rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
