import React from "react"
import DemographicsChart1 from "./chart-images/DemographicsChart1.png"
import DemographicsChart2 from "./chart-images/DemographicsChart2.png"
import DemographicsChart3 from "./chart-images/DemographicsChart3.png"
import DemographicsChart4 from "./chart-images/DemographicsChart4.png"

export default function Demographics(){
    return (
        <div className="chart--wrapper">
            <h1 className="section-title">Demographics</h1>
            <img className="chart--img" src={DemographicsChart1} />
            <img className="chart--img" src={DemographicsChart2} />
            <img className="chart--img" src={DemographicsChart3} />
            <img className="chart--img" src={DemographicsChart4} />
        </div>
    )
}