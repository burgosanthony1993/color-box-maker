import React, {Component} from "react";
//Child component

class Box extends Component {
    //The child component is going to display each box
    render(){

        //Access to the props passed down from the parent
        const {width, height, color} = this.props;

        const BoxStyle = {
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: color,
            display: 'inline-block',
            margin: '10px'
          };
        return (
            <div style={BoxStyle}>
                
                {/* Display the box with the given dimensions and color */}
            </div>
        )
   } 
}

export default Box;