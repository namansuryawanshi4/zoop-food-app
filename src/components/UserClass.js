import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {           // creating state variable in class based component
            userInfo: {
                name: "",
                location: "",
                avatar_url: "",
            }         // can add many variables inside this.state
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/namansuryawanshi4")
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    render(){
        const { name,location,avatar_url } = this.state.userInfo;
        
        return(
            <div className="user-card">
                <h1>Contact us</h1>
                <img src={avatar_url} alt="image" />
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Contact: namansuryawanshi0409@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;