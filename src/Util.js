import Perfume from "perfume.js";
import configData from "./configuration.json";
import moment from "moment"
let isPerfume = configData.newPerfume;
let memData  =  [];



export const perfume = (pageName) => {

  if (!isPerfume) {
    return {
      start: () => {}
    };
  };

   const analyticsTracker = ({ metricName, data, duration}) => {
    


     };


  return new Perfume({
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
