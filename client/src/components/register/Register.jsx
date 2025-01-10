import React, {useState} from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

// assets
import video from '../../loginAssets/banner.mp4'
import logo from '../../loginAssets/logo.png'

// icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

function Register() {
  // useState to hold inputs
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate()

  // Onclick let us get what the user has entered
  const createUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3002/register', {
        Email: email,
        UserName: userName,
        Password: password
    }).then(()=>{
        //go to login form directly
        navigateTo('/')

        //let us clear the fields
        setEmail('')
        setUserName('')
        setUserName('')
    })
  }   

  return (
    <div className='registerPage flex'>
      <div className="container flex">

        <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
        
            <div className="textDiv">
                <h2 className="title">Read to learn, read to grow</h2>
                <p>Let's read together</p>
            </div>

            <div className="footerDiv flex">
                <span className="text">Have an account?</span>
                <Link to={'/'}>
                <button className="btn">Login</button>
                </Link>
            </div>
        </div>

        <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo Image" />
                <h3>Let Us Know You!</h3>
            </div>

            <form action="" className="form grid"  >
                {/* <span className='showMessage'>Register Status will go here</span> */}

                <div className="inputDiv">
                    <label htmlFor="eamil">Email</label>
                    <div className="input flex">
                        <MdMarkEmailRead className="icon" />
                        <input type="email" id='eamil' placeholder='Enter Email' onChange={(event)=>{
                            setEmail(event.target.value)
                        }} />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="username">Username</label>
                    <div className="input flex">
                        <FaUserShield className="icon" />
                        <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                            setUserName(event.target.value)
                        }} />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <div className="input flex">
                        <BsFillShieldLockFill className="icon" />
                        <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                            setPassword(event.target.value)
                        }} />
                    </div>
                </div>

                <button type='submit' className='btn flex' onClick={createUser}>
                    <span>Register</span>
                    <AiOutlineSwapRight className="icon" />
                </button>

                <span className="frogetPassword">
                    Forget your password? <a href="">Click Here</a>
                </span>

            </form>
        </div>

      </div>
    </div>
  )
}

export default Register
