import React from "react"
import bankData from "../banks"
import DrumMachineCss from "../DrumMachine.css"
class DrumPad extends React.Component {
    constructor(props){
        super(props)

        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
      }
      handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
          this.playSound();
        }
      }
  
    playSound = () => {
        this.audio.play()
        this.props.setDisplay(this.props.id)
    }
    
    render(){
        
        return(
            <div className="drum-pad" 
            id={this.props.id}
            onClick={this.playSound}>
                <p>{this.props.keyTrigger}</p>
                <audio 
                ref={ref => this.audio = ref}
                className="clip"
                src={this.props.src}>
                </audio>
            </div>
        )
    }
}
export default DrumPad;