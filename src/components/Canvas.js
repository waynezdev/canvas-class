import React, { Component } from "react";
import ColourSelector from "./ColourSelector"

class Canvas extends Component {

    state= {hex: "#ffffff"}

    constructor(props) {
        super(props); //always use super when using constructor function, props is from the parent
        this.canvasRef = React.createRef(); //canvasRef is something you name 
        //React.createRef is how you create the refernece to canvasRef
    }
    componentDidMount () {
        console.log(this.canvasRef)
    }

    onColourSelectorChange = (event) => {
        this.setState({hex: event.target.value});

    }


    render() {

        const {hex} = this.state

        return (
            <>
            <div>
                <ColourSelector
                    onColourSelectorChange={this.onColourSelectorChange} 
                    hex={hex}
                    />
            </div>

            <canvas
                width="400"
                height="400"
                styles={{border: "6px solid black"}}
                ref={this.canvasRef} />

                </>
        )

    }
}