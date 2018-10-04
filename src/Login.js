import React, { Component } from 'react';
import fire from './config/Fire';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
<div id='LoginForm'>
  <div class="container">
    <div class="login-form">
   <div class="main-div">
     <form id="Login">
       <div className="form-group">
         <label className='label'>Email address</label>
         <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
       </div>
       <div className="form-group">
          <label className='label'>Password</label>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" />
      </div>
         <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
         <hr/>
         <button onClick={this.signup} className="btn btn-primary">Signup</button>
     </form>
    </div>
  </div>
  </div>
</div>
    );
  }
}
export default Login;
