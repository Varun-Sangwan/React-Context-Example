import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {username => (
                    <p>Welcome, {username.user}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header