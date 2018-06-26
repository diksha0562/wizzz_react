import React from 'react';
import WizardData from './WizardData';
class Wizard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentState:0,
            name:'',
            email:'',
            password:'',
            mobileNumber:'',
            gender:''
        }
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleWizardInputChange = this.handleWizardInputChange.bind(this);
    }

    handleWizardInputChange(e){
        this.setState({[e.target.name]:e.target.value})
        console.log('e.target.value',e.target.value)
        console.log('this.state',this.state)
    }

    handleNext(){
        let {currentState} = this.state;
        if(currentState < WizardData().length-1){
            currentState++;
            this.setState({currentState})
        }
        
    }

    handlePrevious(){
        let {currentState} = this.state;
        if(currentState > 0){
            currentState--
            this.setState({currentState})
        }
    }
    
    renderComponent(){
        console.log(WizardData())
        return WizardData().map((elem, index) => {
            if(index == this.state.currentState){
                switch (elem.type){
                    case "text" : 
                    return (
                        <div key={index}> {elem.heading}: <input type={elem.type}  className="input_box" value={this.state[elem.name]} name={elem.name} onChange={this.handleWizardInputChange}/> </div>
                      )

                    case "email":
                    return(
                        <div key={index}> {elem.heading}: <input type={elem.type}  className="input_box" value={this.state[elem.name]} name={elem.name} onChange={this.handleWizardInputChange}/> </div>
                    )

                    case "radio":
                    return( 
                        <div key={index}> {elem.heading}:
                       { elem.value.map((e ,key) => 
                      <div> {e}: <input type={elem.type}  className="input_box" value={e} name={elem.name} checked={e==this.state[elem.name]} onChange={this.handleWizardInputChange}/> </div>
                    )}
                    </div>
                    )

                      default : 
                      return null

                }
           }
        })
    }

    render(){
        return(
            <div>
                <form action="/afterSubmit">
                {this.renderComponent()}
               {this.state.currentState > 0 ? <input type="button" value="Previous" onClick= {this.handlePrevious} className="btn"/>: null}
               {this.state.currentState < WizardData().length-1 ?<input type="button" value="Next" onClick= {this.handleNext} className="btn"/>:null}
                {this.state.currentState ==WizardData().length-1 ? <input type="submit" value="Submit" className="btn"/>:null}
               </form>
                </div>
        )
    }
}

export default Wizard;