import React from "react"

export default function Card (props){
        return ( 
            <div className="card--container">
               <div className="card--logo-name-wrapper">
                    <img className="card--coin-logo" src={props.logo} />
                    <p className="card--name">{props.name}</p>
                     <p className="card--rank">#{props.marketCapRank}</p>
               </div> 
               <div className="card--stats-wrapper">
                    <p className="card--current-price">Current price: ${props.currentPrice}</p>
                    <p className="card--price-change-24hr">24hr change: ${props.priceChange24Hours}</p>
                    <p className="card--price-change-percent-24hr">24hr change: {props.priceChangePercent24Hours}%</p>
                    <p className="card--market-cap">Market cap: ${props.marketCap}</p>
                    <img className="card--coin-logo-bottom" src={props.logo} />
               </div>
           </div> 
        )
    }
    
