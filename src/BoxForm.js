import React, {Component} from "react"


class BoxForm extends Component {
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="height">Height</label>
            <input
                id="height"
                name="height"
                value={this.props.state.height}
                onChange={this.props.handleChange}
            />
            <label htmlFor="width">Width</label>
            <input
                id="width"
                name="width"
                value={this.props.state.width}
                onChange={this.props.handleChange}
            />
            <label htmlFor="color">Color</label>
            <input
                id="color"
                name="color"
                value={this.props.state.color}
                onChange={this.props.handleChange}
            />
        <button>Submit Button</button>
        </form>
        </div>
        )
    }
}

export default BoxForm