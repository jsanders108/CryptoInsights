import React from "react"
import FamiliarityChart1 from "./chart-images/FamiliarityChart1.png"
import FamiliarityChart2 from "./chart-images/FamiliarityChart2.png"
import FamiliarityChart3 from "./chart-images/FamiliarityChart3.png"
import FamiliarityChart4 from "./chart-images/FamiliarityChart4.png"
import FamiliarityChart5 from "./chart-images/FamiliarityChart5.png"
import FamiliarityChart6 from "./chart-images/FamiliarityChart6.png"
import FamiliarityChart7 from "./chart-images/FamiliarityChart7.png"
import FamiliarityChart8 from "./chart-images/FamiliarityChart8.png"
import FamiliarityChart9 from "./chart-images/FamiliarityChart9.png"
import FamiliarityChart10 from "./chart-images/FamiliarityChart10.png"
import FamiliarityChart11 from "./chart-images/FamiliarityChart11.png"
import FamiliarityChart12 from "./chart-images/FamiliarityChart12.png"


export default function Familiarity(){
    return (
        <div className="chart--wrapper">
            <h1 className="section-title">Awareness & Familiarity</h1>
            <img className="chart--img" src={FamiliarityChart1} />
            <img className="chart--img" src={FamiliarityChart2} />
            <img className="chart--img" src={FamiliarityChart3} />
            <img className="chart--img" src={FamiliarityChart4} />
            <img className="chart--img" src={FamiliarityChart5} />
            <h1 className="additional-analysis-text">Additional Analysis</h1>
            <img className="chart--img" src={FamiliarityChart6} />
            <img className="chart--img" src={FamiliarityChart7} />
            <img className="chart--img" src={FamiliarityChart8} />
            <img className="chart--img" src={FamiliarityChart9} />
            <img className="chart--img" src={FamiliarityChart10} />
            <img className="chart--img" src={FamiliarityChart11} />
            <img className="chart--img" src={FamiliarityChart12} />
        </div>
    )
}