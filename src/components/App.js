import React, { Component } from "react";
import ColourSelector from "./ColourSelector"
import Canvas from "./Canvas";

class App extends Component {

    render () {

        return (

            <div>
                <h1>Welcome to your drawing Pad!</h1>
                <ColourSelector  />
            </div>
        );
    }
}

export default App