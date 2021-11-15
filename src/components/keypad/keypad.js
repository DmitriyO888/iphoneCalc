import { Component } from "react";
import Button from "../button/button";
import "./keypad.css"


class Keypad extends  Component{
    render(){
        return(
            <div className="Keypad">
                
                {this.props.children}
            </div>
        )
    }
}

export default Keypad