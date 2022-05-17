import React from "react"
import {Link} from "react-router-dom"

function Landing() {
    return (
        <>
            <p>Landing </p>
            <nav>
                
            </nav>
            <Link to="/signup">
                <button>Sign up</button> 
            </Link>
            <Link to="/login">
                <button>Login</button> 
            </Link>

        </>
    )
}

export default Landing