import {Component} from "react"
import Button from "../button/button"
import Keypad from "../keypad/keypad";
import Display from "../display/display";
import "./calculator.css"


class Calculator extends Component{
    constructor(){
        super();
        this.state = {data: ""}
    }

    calculate = () =>{
        const result = eval(this.state.data)
        this.setState({data:  result}) 
    }

    

    trigonCalc = (func) =>{
        let result;
        switch(func){
            case "SIN":
               result = Math.sin(this.state.data)
               this.setState({data:  result}) 
               break;
            case "COS":
                result = Math.cos(this.state.data)
                this.setState({data:  result}) 
                break;
            case "TAN":
                result = Math.tan(this.state.data)
                this.setState({data:  result}) 
                break;
            case "CTG":
                result = (1/Math.tan(this.state.data))
                this.setState({data:  result}) 
                break;
        }
    }

    handleClick = (e) =>{
        let value = e.target.getAttribute('data-value');
        switch(value){
            case "clear":
                this.setState({data: ""})
                break;
            case "equel":
                this.calculate()
                break;
            case "null":
                this.setState({data: this.state.data.substring(0, this.state.data.length - 1)})
                break;
            case "SIN":
                this.trigonCalc("Sin")
                break;
            case "COS":
                this.trigonCalc("COS")
                break;
            case "TAN":
                this.trigonCalc("TAN")
                break;
            case "CTG":
                this.trigonCalc("CTG")
                break;
            case "inverse":
                this.setState({data: this.state.data * -1})
                break;
            case "%":
                this.setState({data: this.state.data / 100})
                break;
            default: 
                this.setState({data: this.state.data + value})
        }
    }


    render(){
        return(
            <div className="Calculator">
                
                <Display data={this.state.data}/>
                <Keypad>
                   

                    <Button onClick={this.handleClick} label="AC" value="clear" className='bg-grey'/>
                    <Button onClick={this.handleClick} label="+/-" value="inverse" className='bg-grey'/>
                    <Button onClick={this.handleClick} label="%" value="%"  className='bg-grey'/>
                    <Button onClick={this.handleClick} label="÷" value="/" className="bg-orange divide"/>
                   

                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="x" value="*" className="bg-orange"/>
                    

                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="-" value="-" className="bg-orange minus"/>
            

                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label="+" value="+" className="bg-orange"/>

                    <Button onClick={this.handleClick} label="0" value="0" className='zero-btn'/>
                    <Button onClick={this.handleClick} label="," value="," />
                    <Button onClick={this.handleClick} label="=" value="equel" className="bg-orange"/>

                </Keypad>
            </div>
        );
    };
};

export default Calculator