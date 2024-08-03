import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div className="user">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
            </div>
        )
    }
}

export default User;