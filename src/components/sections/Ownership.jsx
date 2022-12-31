import React from "react"
import OwnershipChart1 from "./chart-images/OwnershipChart1.png"
import OwnershipChart2 from "./chart-images/OwnershipChart2.png"
import OwnershipChart3 from "./chart-images/OwnershipChart3.png"
import OwnershipChart4 from "./chart-images/OwnershipChart4.png"
import OwnershipChart5 from "./chart-images/OwnershipChart5.png"
import OwnershipChart6 from "./chart-images/OwnershipChart6.png"
import OwnershipChart7 from "./chart-images/OwnershipChart7.png"
import OwnershipChart8 from "./chart-images/OwnershipChart8.png"
import OwnershipChart9 from "./chart-images/OwnershipChart9.png"
import OwnershipChart10 from "./chart-images/OwnershipChart10.png"
import OwnershipChart11 from "./chart-images/OwnershipChart11.png"

export default function Ownership(){
    return (
        <div className="chart--wrapper">
            <h1 className="section-title">Ownership</h1>
            <img className="chart--img" src={OwnershipChart1} />
            <img className="chart--img" src={OwnershipChart2} />
            <img className="chart--img" src={OwnershipChart3} />
            <img className="chart--img" src={OwnershipChart4} />
            <img className="chart--img" src={OwnershipChart5} />
            <h1 className="additional-analysis-text">Additional Analysis</h1>
            <img className="chart--img" src={OwnershipChart6} />
            <img className="chart--img" src={OwnershipChart7} />
            <img className="chart--img" src={OwnershipChart8} />
            <img className="chart--img" src={OwnershipChart9} />
            <img className="chart--img" src={OwnershipChart10} />
            <img className="chart--img" src={OwnershipChart11} />
        </div>
    )
}