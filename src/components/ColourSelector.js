import React, { Component } from "react";

class ColourSelector extends Component {

    state = { hex: this.props.hex}

    onInputChange = (event) => {
        console.log(event.target)
        this.setState({hex: event.target.value});
    }

    render() {

        const { hex } = this.state; //destructure hex from parent propertys 
        //so you dont have to keep using this.props.hex

        // const { hex = "#ffffff" } = this.props;
        // you can also set default value when destructuring but it only runs
        //when render runs
        
        return (
            <>
            <input type="color" value={hex} onChange={this.onInputChange}  />
            </>
            );
           
       
        }
        

    

    static defaultProps = {
        hex: "#ffff0f"
    };
//needs to be inside of class 
//same as "A" way with syntactical sugar



}

// ColourSelector.defaultProps = {
//     hex: "#ffffff"
// }

// the "A" way of setting default value
//needs to be outside of class

    export default ColourSelector