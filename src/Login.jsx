import React from 'react';
import './login.css';

const Login = () => {
    return(
        <div className="container">
        <div className="login-form">
            <form  method="post">
                <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required" />
                </div>
                <div className="form-group text-right">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>
                <div className="clearfix">
                    <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                    <a href="Home.jsx" className="float-right">Forgot Password?</a>
                </div>        
            </form>
            <p className="text-center"><a href="Home.jsx">Create an Account</a></p>
        </div>
        </div>
    );
};
export default Login;