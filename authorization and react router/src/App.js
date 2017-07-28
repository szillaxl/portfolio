import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import './App.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      warning: 'no-warning',
      token: localStorage.authToken
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }
  formSubmit(e) {
    let self = this;
    e.preventDefault();
    axios
      .post('http://localhost:3005/login', this.state)
      .then((res) => {
        /*
          TASK 2: If the login request is successful, store the authToken from the server in localStorage
            Once token is stored, redirect user to the private page
            If the login request was unsuccessful, do not redirect user and show a warning message.
        */
        if (res.status === 200) {
          localStorage.authToken = res.data.token;
          location.href = "http://localhost:3000/private";
        }
      })
      .catch(() => {
        self.setState({
          warning: 'login unsuccessful'
        })
      })
  }
  txtFieldChange(e) {
    if (e.target.name === "username") { this.state.username = e.target.value }
    else if (e.target.name === "password") { this.state.password = e.target.value }

    this.setState({
      username: this.state.username,
      password: this.state.password
    });
  }
  render() {
    return (
      <div id="auth">
        <h3>Login Form</h3>
        <p className={"alert alert-danger " + this.state.warning}>Incorrect username or password</p>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <input
              onChange={this.txtFieldChange}
              className="form-control"
              type="text"
              placeholder="Username"
              name="username" />
          </div>
          <div className="form-group">
            <input
              onChange={this.txtFieldChange}
              className="form-control"
              type="password"
              placeholder="Password"
              name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-success"> <span className="glyphicon glyphicon-user"></span> Login</button>
          </div>
        </form>
      </div>
    );
  }
}
class PrivatePage extends Component {
  constructor() {
    super();
    this.state = { data: null, loading: true, auth: false, username: null }
  }
  componentDidMount() {
    /* 
      TASK 3: When accessing this page/component, make sure that there is an authToken in your local storage.
        If there is no authToken, redirect to the login page.
        If there is an authToken, send a request to the '/privatedata' endpoint with the authToken included in the headers.*/
    if (localStorage.authToken !== undefined && localStorage.authToken !== null) {
      axios
        .get('http://localhost:3005/private', { headers: { 'authorization': localStorage.authToken } })
        .then((res => {
          
          if (res.status === 200) {
            this.setState({
              loading: false,
              auth: true,
              data: res.data
            })
          }
        })
        )
    }
    else (
      location.href = 'http://localhost:3000'
    )
    /* TASK 7: The response should include the username, display "Hello, [USERNAME]" on this page.
   */
  }
  render() {
    if (this.state.loading) {
      return <div>loading ...</div>;
    }
    else {
      return (
        <div className='ppd'>
          <h1>Private Page Data</h1>
          <h2>Hello, {this.state.data}</h2>
          <h3>This is the page only you can see</h3>
          <h4>Please come again</h4>
        </div>
      );
    }
  }
}
class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }
  formSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3005/encrypt', this.state)
      .then((res) => {
      })
  }
  txtFieldChange(e) {
    if (e.target.name === "username") {
      this.state.username = e.target.value;
    }
    else if (e.target.name === "password") {
      this.state.password = e.target.value;
    }
    this.setState({
      username: this.state.username,
      password: this.state.password
    });
  }
  render() {
    return (
      <div id="auth">
        <h3>Registration Form</h3>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <input
              onChange={this.txtFieldChange}
              className="form-control"
              type="text"
              placeholder="Username"
              name="username" />
          </div>
          <div className="form-group">
            <input
              onChange={this.txtFieldChange}
              className="form-control"
              type="password"
              placeholder="Password"
              name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-success"> <span className="glyphicon glyphicon-edit"></span> Register</button>
          </div>
        </form>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="wrap">
          <div className="links">
          <Link to="/" className="btn btn-success"><span className="glyphicon glyphicon-user"></span> Login</Link>
          <Link to="/register" className="btn btn-success"><span className="glyphicon glyphicon-edit"></span> Register</Link>
          </div>
        {this.props.children}
      </div>
    )
  }
}

export { App, Register, Login, PrivatePage };