# perfumeJs with React
Perfume JS integration with react js application for client side performance test

How to Run:

**npm install**

**npm start**

How to use perfume js in react:

**Util.js**

import Perfume from "perfume.js";

import configData from "./configuration.json";

import moment from "moment";

let isPerfume = configData.newPerfume;

let memData  =  [];

export const perfume = (pageName) => 
{

  if (!isPerfume) 
  {
    
    return 
    {
      
      start: () => {}
    };
  };
   
   const analyticsTracker = ({ metricName, data, duration}) => 
   {    
};
  
  return new Perfume (
  {
  
    firstContentfulPaint: true,
    
    firstPaint: true,
    
    firstInputDelay: true,  
    
    dataConsumption: true,
    
    navigationTiming: true,
    
    totalBlockingTimeFinal:true,
    
    networkInformation: true,
    
     analyticsTracker
     
  });
};


Calling perfume js in react components:

componentDidMount() {

   this.perfume = perfume();

  }
  
componentDidUpdate() {

    this.perfume = perfume();
    
    }
    

useEffect(() => {

    window.addEventListener("message", function (e) {
    
        this.perfume = perfume()
        
    });
    
  }, []);
    

Open chrome browser console after starting application to look into performance metrics:
![image](https://user-images.githubusercontent.com/23724530/148424060-9df8396b-c21d-45e4-b255-7ec707ec062c.png)

Happy Hacking :) 
