import React from "react";
import Familiarity from "./sections/Familiarity"
import Ownership from "./sections/Ownership"
import Attitudes from "./sections/Attitudes"
import Demographics from "./sections/Demographics"

export default function SummaryChartsPage() {

  const [sections, setSections] = React.useState([
    {
      name: "button1",
      isVisible: false
    },
    {
      name: "button2",
      isVisible: false
    },
    {
      name: "button3",
      isVisible: false
    },
    {
      name: "button4",
      isVisible: false
    }
  ])

  const visibleStyles = {
    backgroundColor: "pink",
    color: "darkblue" ,
    fontWeight: "700"
  }

  const invisibleStyles = {
    backgroundColor: "darkblue",
    color: "white",
    fontWeight: "300"
  }

  function handleClick(event){
    const buttonName = event.target.name
    console.log(event.target.name)
    setSections ( prevState => prevState.map(item => {
      return item.name === buttonName ?
           {...item, isVisible: !item.isVisible} :
           item
    }) )
  }

  return (
    <main className="main-wrapper">
      <h2 className="summary-title">DETAILED SURVEY RESULTS</h2>
      <h3 className="summary-text-instructions">Click on dynamic buttons below to view/hide detailed results for each section of the survey</h3>
      <p className="summary-text-subInstructions">Blue button = charts invisible, Pink button = charts visible</p>
      <div className="button-row">
        <button 
          name="button1" 
          style={sections[0].isVisible ? visibleStyles : invisibleStyles} 
          onClick={handleClick}>
          Awareness & Familiarity
        </button>
        <button 
          name="button2" 
          style={sections[1].isVisible ? visibleStyles : invisibleStyles} 
          onClick={handleClick }>
          Ownership
        </button>
        <button 
          name="button3" 
          style={sections[2].isVisible ? visibleStyles : invisibleStyles} 
          onClick={handleClick }>
          Attitudes
        </button>
        <button 
          name="button4" 
          style={sections[3].isVisible ? visibleStyles : invisibleStyles} 
          onClick={handleClick }>
          Demographics
        </button>
      </div>
      {sections[0].isVisible && <Familiarity />}
      {sections[1].isVisible && <Ownership />}
      {sections[2].isVisible && <Attitudes />}
      {sections[3].isVisible && <Demographics />}
    </main>
  );
}
