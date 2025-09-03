import React from 'react'
import loginpageimg from "./../../assets/login-page-img.png"
import googlelogo from "./../../assets/Google-logo.png"
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className="Login-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        <img src={loginpageimg} alt="" className="w-75" />
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="data:image/png;base64,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" alt="" className="instagram-icon mb-3" />
                        <form className="login-form">
                            <div className="form-group  my-2  w-50">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group my-2 w-50">

                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <button type="submit" class="btn btn-primary w-50 mt-4  login-btn">
                                Login
                            </button>

                            <hr />
                            <div className="text-center">
                                <img src={googlelogo} alt="" className="logo-google"></img>
                            </div>

                            <p className="text-center mt-5">Forgot password</p>
                            <p className="text-center">
                                Don't have an account?  <Link to="/register">Sign up</Link>
                            </p>
                             
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login


