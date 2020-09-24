import React from "react"
class PadBank extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <p>{this.props.currentBank}</p>
        )
    }
}

export default PadBank