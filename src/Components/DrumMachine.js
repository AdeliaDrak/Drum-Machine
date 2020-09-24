import React from "react";
import DrumPad from "./DrumPad";
import BankData from "../banks"
import DrumMachineCss from "../DrumMachine.css"

//<p>{this.state.currentBank[0].keyCode}</p>

class DrumMachine extends React.Component {
  
   constructor(props){
     super(props);

     this.state = {
       currentDisplay: ""   
     };
   }

   setDisplay = (id) => { 
     this.setState({
       currentDisplay: id 
     });
   }

    render(){
        return(
          <div>
            <h1>drum machine</h1>
            <div id="drum-machine">
              <div id="drum-pads">
              {BankData.map(d => (
                <DrumPad
                id={d.id}
                src={d.src}
                keyTrigger={d.keyTrigger}
                keyCode={d.keyCode}
                setDisplay={this.setDisplay}
                />
              ))}
              <div className="display-container">
              <p id="display">{this.state.currentDisplay}</p> 
                <input type="range" min="1" max="100" className="slider" id="my-range"/>
                </div>
            </div>
            </div>
            </div>   
        );
    }
}

export default DrumMachine;