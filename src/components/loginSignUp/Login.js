import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
        <h1>Login</h1>
          <form action="" target="" method="POST">
              <label for="id_of_input">Email</label>
              <input type="email" placeholder="username@gmail.com"></input>
              <br/>
              <label for="" >Password</label>
              <input type="password" placeholder="password"></input>
              <br/>
              <Link to="/">Forgot Password?</Link>
              <br/>
              <button type="submit">Sign in</button>
               <h6>or continue with</h6> 
                <button>Google</button>
                <button>Apple</button>
                <button>FaceBook</button>
              <h6>Don't have an account? <Link to="/signup">Sign up</Link></h6>
        </form>
    </div>

  )
}

export default Login;

// logic for sign up: 
// if email is an invalid email => invalid email message, 
// if email is not in database => email is not found, sign up?
// if pass does not match email => pass does not match email
//if sign in but one or both fields are empty => both pass and email are required to sign in
//sign up takes to sign up page