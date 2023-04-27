import React from "react";

class App2 extends React.Component{
    constructor(){
        super();
        this.state={
            email : "p@psm.com"
        }
    }

    change = (e)=>{
        this.setState({email:e.target.value});
    }
    render(){
        return(
            <div>
                <input
                    value={this.state.email}
                    onChange={this.change}
                />
                <p>Email: {this.state.email}</p>
            </div>
        );
    }
}

export default App2;