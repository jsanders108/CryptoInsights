import React from "react"

export default function Trending (props){
    return (
        <div>
           <div className="trending--wrapper">
                <p className="trending--name">{props.name}</p>
                <img className="trending--logo" src={props.logo} />
           </div>
        </div>
    )
}

