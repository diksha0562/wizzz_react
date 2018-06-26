import React from 'react';
import { withRouter } from "react-router-dom";
import validate from '../validation/FormValidation';
class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            mobileNumber:'',
            errMsg:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
        console.log('=======',e.target.value);
    }

    handleSubmit(e){
        this.props.handleProfileData(this.state);
        let validateObject = validate(this.state);
        (validateObject.msg.length == 0) ? this.props.history.push('/afterSubmit') : this.setState({errMsg:validateObject.msg})
        // this.props.history.push('/afterSubmit')
        console.log('stateee',this.props.history);
        console.log('validateObject',validateObject)
        console.log('validateObject.msg.length',validateObject.msg.length);

    }

    render(){
        const {errMsg} = this.state;
        return(
            <form>
                <fieldSet>
                <legend>REGISTER HERE!!</legend>
                <table>
                    <tbody>
                <tr className="input_field">
                <td> Name: </td>
                <td><input type="text" className="input_box" onChange={this.handleChange} name="name"/></td></tr>
                <tr className="input_field"><td>Email: </td>
                <td><input type="email" className="input_box" onChange={this.handleChange} name="email"/></td></tr>
                <tr className="input_field"><td>Password:</td> 
                <td><input type="password" className="input_box" onChange={this.handleChange} name="password"/></td></tr>
                <tr className="input_field"><td>Mobile Number:</td>
                <td><input type="text" className="input_box" onChange={this.handleChange} name="mobileNumber"/></td></tr>
                </tbody>
                </table>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
                <span className="errorMessage">{errMsg}</span>
                </fieldSet>
                </form> 
        )
    }
}
export default withRouter(Form);
// export default Form;