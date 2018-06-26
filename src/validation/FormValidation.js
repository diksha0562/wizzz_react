import React from 'react';
export default (data) => {
    let name = data.name.trim();
    let email = data.email.trim();
    let password = data.email.trim();
    let mobileNumber = data.mobileNumber.trim();
    let isValid;
    if(name.length==0){
        return {
            msg: 'Name Field should not be empty',
            isValid: false
        }
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        return {
            msg: 'Invalid Email',
            isValid: false
        }
    }
    else if(password.length<6){
        return {
            msg: 'Password length should be greater than 5',
            isValid: false
        }
    }
    else if(!(/[0-9]{10}/.test(mobileNumber))){
        return {
            msg: 'Invalid Mobile Number',
            isValid: false
        }
    }
    else{
        return {isValid: true, msg: ''}
    }
}