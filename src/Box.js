import React, {Component} from "react";
//Child component

class Box extends Component {
    //The child component is going to display each box

    handleRemove = (evt) => {
        evt.preventDefault();
        // Call the function passed as a prop to remove this box
        this.props.removeBox();
    };

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
            <div>
                <div style={BoxStyle}>
                    
                    {/* Display the box with the given dimensions and color */}
                </div>
                <button onClick={this.handleRemove}>x</button>
            </div>
        )
   } 
}

export default Box;