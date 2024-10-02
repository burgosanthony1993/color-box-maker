import React, { Component } from "react"
import BoxForm from "./BoxForm"
import Box from "./Box"
import { v4 as uuidv4 } from 'uuid';


//Parent Component

class BoxList extends Component {
    //The state passes some examples to the child component
    //The state also defines what should be each box
    //Using PCFS, you can initliaze the state without constructors & super props
    state = {
        boxes: [
          { width: '100', height: '100', color: 'red' },
          { width: '150', height: '150', color: 'blue' },
          { width: '200', height: '200', color: 'green' }
        ],
        newBox: {
            width: '',
            height: '',
            color: ''
        }
      };
    
   //Using PCFS, Arrow Functions automatically bind this
   handleSubmit = (evt) => {
        evt.preventDefault();
        // Update boxes with the new box details
        this.setState((prevState) => ({
            boxes: [...prevState.boxes, { ...prevState.newBox, id: uuidv4() }],
            newBox: { width: '', height: '', color: '' } // Resetting newBox state
        }));
    };

    handleChange = (evt) => {
        const { name, value } = evt.target;
        this.setState((prevState) => ({
            newBox: {
                ...prevState.newBox,
                [name]: value
            }
        }));
    };

    render(){
        return (
            <div>
                {this.state.boxes.map((box) => (
            <Box
            key={uuidv4()}
            id={uuidv4()}
            width={box.width}
            height={box.height}
            color={box.color}
            />
        ))}
            <BoxForm
                newBox={this.state.newBox}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
            />
        </div>
        )
    }
}

export default BoxList;