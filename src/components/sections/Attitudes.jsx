import React from "react"
import AttitudesChart1 from "./chart-images/AttitudesChart1.png"
import AttitudesChart2 from "./chart-images/AttitudesChart2.png"
import AttitudesChart3 from "./chart-images/AttitudesChart3.png"
import AttitudesChart4 from "./chart-images/AttitudesChart4.png"
import AttitudesChart5 from "./chart-images/AttitudesChart5.png"
import AttitudesChart6 from "./chart-images/AttitudesChart6.png"
import AttitudesChart7 from "./chart-images/AttitudesChart7.png"
import AttitudesChart8 from "./chart-images/AttitudesChart8.png"
import AttitudesChart9 from "./chart-images/AttitudesChart9.png"
import AttitudesChart10 from "./chart-images/AttitudesChart10.png"

export default function Attitudes(){
    return (
        <div className="chart--wrapper">
            <h1 className="section-title">Attitudes</h1>
            <img className="chart--img" src={AttitudesChart1} />
            <img className="chart--img" src={AttitudesChart2} />
            <img className="chart--img" src={AttitudesChart3} />
            <img className="chart--img" src={AttitudesChart4} />
            <img className="chart--img" src={AttitudesChart5} />
            <img className="chart--img" src={AttitudesChart6} />
            <img className="chart--img" src={AttitudesChart7} />
            <h1 className="additional-analysis-text">Additional Analysis</h1>
            <img className="chart--img" src={AttitudesChart8} />
            <img className="chart--img" src={AttitudesChart9} />
            <img className="chart--img" src={AttitudesChart10} />
        </div>
    )
}