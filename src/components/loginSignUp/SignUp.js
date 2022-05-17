import axios from 'axios'
import { React, useState } from 'react'
// const axios = require('axios').default;

function SignUp() {
    const [userRegisterData, setUserRegisterData] = useState({name: "", email: "", password: ""})
 
    // update state when changing input
    function handleChange(event) {
        setUserRegisterData(prevUserRegisterData => {
            return {
                ...prevUserRegisterData,
                [event.target.name]: event.target.value
            }
        })
    }
    // console.log(userRegisterData)

    // send data to api when submitting
    async function handleSubmit(event) {
        event.preventDefault()
        console.log(userRegisterData)
        try {
            const response = await axios.post('https://dzhaafar-elearner-backend.herokuapp.com/register', {
                userRegisterData
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>

                <input
                    type="text"
                    placeholder="name"
                    onChange={handleChange}
                    name="name"
                    value={userRegisterData.name}
                    autoComplete="off">
                </input>

                <br/>
                <label>Email</label>

                <input
                    type="email"
                    placeholder="username@gmail.com"
                    onChange={handleChange}
                    name="email"
                    value={userRegisterData.email}
                    autoComplete="off">    
                </input>

                <br />
                <label>Password</label>

                <input
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                    name="password"
                    value={userRegisterData.password}
                    autoComplete="off">
                </input>

                {/* <br/>
                <label>Confirm password</label>
                <input type="password" placeholder="password" onChange={handleChange}></input>
                <br/>  */}

                <button>Sign up</button>

                <h6>or sign up with</h6> 
                    <button type="button">Google</button>
                    <button type="button">Apple</button>
                    <button type="button">FaceBook</button>
            </form>
        </div>
  )
}

export default SignUp;