import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Form from './Form';
import Wizard from './Wizard';
import '../styles/index.css';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            mobileNumber:''
        }
        this.handleProfileData = this.handleProfileData.bind(this) 
    }

    handleProfileData(data){
        console.log('data', data)

        this.setState({
            name:data.name,
            email:data.email,
            password:data.password,
            mobileNumber:data.mobileNumber
        })
    }
    

    render(){
        return(
            <div>
            <h2> Register Form !!</h2>
            <BrowserRouter>
            <div>
                {/* <Route exact path="/" render={()=><Form handleProfileData={this.handleProfileData}/>}/> */}
                <Route exact path="/" render={()=><Wizard/>}/>
                <Route exact path="/afterSubmit" render={()=><Profile name={this.state.name} email={this.state.email} mobileNumber={this.state.mobileNumber}/>}/>
                </div>
                </BrowserRouter>
                </div>
        )
    }
}
export default App;