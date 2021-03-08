
import './App.css';
import React from "react"

import Header from "./Header"
import {UserContextConsumer} from "./userContext"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user : ""
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleClick =this.handleClick.bind(this)
  }
  
  handleChange(e){
    e.preventDefault()
    this.setState({
      user : e.target.value
    })

  }

  render(){
    return (
      <div>
          <Header />
          
              <UserContextConsumer>
                  {username => (
                      <main>
                        <p className="main">No new notifications, {username.user}! 🎉</p>
                      <input
                      type="text"
                    name="username"
                      placeholder="New username"
                      value={this.state.user}
                      onChange={this.handleChange}
                      />
                      <button onClick={()=>username.handleClick(this.state.user)}>Change Username</button>
                      </main>
                  )}
              </UserContextConsumer>
          
          


      </div>
    )
  }
}

export default App


  /**
   *  
   * Challenge: Add the ability for the user to choose a new username
   * 
   * 1. Add state to this component to hold the new username in a controlled form
   * (https://reactjs.org/docs/forms.html#controlled-components)
   * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
   * 
   * 2. Change userContext into a component that has state and provides the ability
   * to change the user's username. Make sure to export the provider and consumer
   * as named exports and update their uses anywhere else in the app
   * 
   * 3. Give this App component the ability to update the username in context when the
   * button is clicked
   */
