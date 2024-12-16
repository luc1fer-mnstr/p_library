import React, {useState, useEffect} from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// assets
import video from '../../loginAssets/banner.mp4'
import logo from '../../loginAssets/logo.png'

// icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

function Login() {
  //  useState to store inputs
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  // show message to user   
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setStatusHolder] = useState('message')

  // Onclick let us get what the user has entered
  const loginUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3002/login', {
        LoginUserName: loginUserName,
        LoginPassword: loginPassword
    }).then((response)=>{
        if(response.data.message || loginUserName == '' || loginPassword == ''){
            navigateTo('/')
            setLoginStatus(`Credentials Don't Exist!`)
        }else{
            // console.log(response.data[0].email)
            // navigateTo('/dashboard')
            if(response.data[0].id == 1){
                navigateTo('/dashboard')
            }else{
                navigateTo('/home')
            }
        }
    })
  }  

  useEffect(()=>{
    if(loginStatus !== ''){
        setStatusHolder('showMessage') //show message
        setTimeout(() => {
            setStatusHolder('message') //hide message after 4s
        }, 4000)
    }
  }, [loginStatus])

  //clear the form on submit
  const onSubmit = () => {
    setLoginUserName('')
    setLoginPassword('')
  }

  return (
    <div className='loginPage flex'>
      <div className="container flex">

        <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
        
            <div className="textDiv">
                <h2 className="title">Read to learn, read to grow </h2>
                <p>Let's read together</p>
            </div>

            <div className="footerDiv flex">
                <span className="text">Don't have an account?</span>
                <Link to={'/register'}>
                <button className="btn">Sign Up</button>
                </Link>
            </div>
        </div>

        <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo Image" />
                <h3>Welcome Back!</h3>
            </div>

            <form action="" className="form grid" onSubmit={onSubmit}>
                <span className={statusHolder}>{loginStatus}</span>

                <div className="inputDiv">
                    <label htmlFor="username">Username</label>
                    <div className="input flex">
                        <FaUserShield className="icon" />
                        <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                            setLoginUserName(event.target.value)
                        }} />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <div className="input flex">
                        <BsFillShieldLockFill className="icon" />
                        <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                            setLoginPassword(event.target.value)
                        }} />
                    </div>
                </div>

                <button type='submit' className='btn flex' onClick={loginUser}>
                    <span>Login</span>
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

export default Login
