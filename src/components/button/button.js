import { Component } from "react";
import "./button.css"

class Button extends Component{
    render(){
        let bgClass = this.props.className
        return(
            <div className={`button ${bgClass}`}
                onClick={this.props.onClick}
                data-value={this.props.value}
                data-size={this.props.size}>
                {this.props.label}
            </div>
        );
    }
}


export default Button