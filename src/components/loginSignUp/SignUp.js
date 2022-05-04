import React from 'react'

function SignUp() {
  return (
    <div>
        <h1>Sign Up</h1>
          <form action="" target="" method="POST">
              <label for="">Name</label>
              <input type="text" placeholder="name"></input>
              <br/>
              <label for="id_of_input">Email</label>
              <input type="email" placeholder="username@gmail.com"></input>
              <br/>
              <label for="" >Password</label>
              <input type="password" placeholder="password"></input>
              <br/>
              <label for="" >Confirm password</label>
              <input type="password" placeholder="password"></input>
              <br/> 
              <button type="submit">Sign up</button>
               <h6>or sign up with</h6> 
                <button>Google</button>
                <button>Apple</button>
                <button>FaceBook</button>
          </form>
        </div>
  )
}

export default SignUp;