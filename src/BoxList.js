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
          { width: '100px', height: '100px', color: 'red' },
          { width: '150px', height: '150px', color: 'blue' },
          { width: '200px', height: '200px', color: 'green' }
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
    this.props.addBox(this.state);
    this.setState({ height: '', width: '', color: ''})
   }

   handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    })
   }

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