import React, { Component } from "react";

class ColourSelector extends Component {

    render() {

        const { hex } = this.props; //destructure hex from parent propertys 
        //so you dont have to keep using this.props.hex
        
        return (
            <input type="color" defaultValue={this.props.hex}   />
            );
       
        }
        
}
    

    export default ColourSelector