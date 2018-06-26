import React from 'react';
class Profile extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <h3>{this.props.email}</h3>
                <h3>{this.props.mobileNumber}</h3>
                </div>
        )
    }
}
export default Profile;