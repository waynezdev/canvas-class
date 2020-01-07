import React, { Component } from "react";

class ColourSelector extends Component {

    render() {

        const { hex } = this.props; //destructure hex from parent propertys 
        //so you dont have to keep using this.props.hex

        // const { hex = "#ffffff" } = this.props;
        // you can also set default value when destructuring but it only runs
        //when render runs
        
        return (
            <input type="color" defaultValue={this.props.hex}   />
            );
       
        }
        

    

static defaultProps = {
    hex: "#ffffff"
}
//needs to be inside of class 
//same as "A" way with syntactical sugar



}

// ColourSelector.defaultProps = {
//     hex: "#ffffff"
// }

// "A" way of setting default value
//needs to be outside of class

    export default ColourSelector