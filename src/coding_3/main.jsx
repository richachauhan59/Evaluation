import React from 'react'
import data from './data.json'

export default class main extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            current: 0
        }
    }
    handlePrevious= ()=>{
        this.setState(
            {
                current: this.state.current-1
            }
        )
    }
    handleNext  = ()=> {
        this.setState(
            {
                current: this.state.current + 1
            }
        )
    }
    render(){
        return(
            <div>
                <div style={{width:"40%", border:"2px solid black", padding: "2.5%", marginLeft:"30%", marginTop: "3%"}}>
                    <div style={{ width: "90%", border: "2px solid black", padding: "2.5%", marginLeft: "5px",  marginTop: "3%" }}>
                        <h1>
                        {data[this.state.current].title}
                        </h1>
                        <hr/>
                        <h4>
                        {data[this.state.current].description}
                        </h4>
                    </div>
                    <button onClick={this.handlePrevious} disabled={(this.state.current === 0) ? true : false} >PREVIOUS</button>
                    <button onClick={this.handleNext} disabled={(this.state.current === 4) ? true : false} >NEXT</button>
                </div>
            </div>
        )
    }
}