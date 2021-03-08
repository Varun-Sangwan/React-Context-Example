import React from "react"

const UserContext = React.createContext()
const UserContextConsumer = UserContext.Consumer

class UserContextProvider extends React.Component {
    state = {
        userInContext : "Varun"
    }

    handleClick=(user) =>{
        this.setState({
            userInContext : user
        })
    }


    render() {
        return(
            <UserContext.Provider value={{user : this.state.userInContext,handleClick:this.handleClick}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


export  {UserContextProvider,UserContextConsumer}