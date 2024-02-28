import { Component } from "react";
import "./index.css";

class UserLoginPage extends Component {
  state = { userName: "", phone: "", email: "", password: "", errorMsg: false };

  onChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { userName, phone, email, password } = this.state;
    if (userName === "") {
      this.setState({ errorMsg: true });
    } else if (phone === "") {
      this.setState({ errorMsg: true });
    } else if (email === "") {
      this.setState({ errorMsg: true });
    } else if (password === "") {
      this.setState({ errorMsg: true });
    } else {
      this.props.history.push("/home/page");
    }
  };

  render() {
    const { userName, email, phone, password, errorMsg } = this.state;
    return (
      <div className="bg-container">
        <h1 className="main-heading">Create Account</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="Login"
          className="image"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            onChange={this.onChangeName}
            value={userName}
          />
          <input
            type="text"
            className="input"
            placeholder="Phone"
            onChange={this.onChangePhone}
            value={phone}
          />

          <input
            type="text"
            className="input"
            placeholder="Email"
            onChange={this.onChangeEmail}
            value={email}
          />

          <input
            type="text"
            className="input"
            placeholder="Password"
            onChange={this.onChangePassword}
            value={password}
          />

          <button type="submit" className="submit-button">
            Sign Up
          </button>
          {errorMsg ? (
            <p className="error-msg">*Please Enter Valid Form</p>
          ) : null}
        </form>
      </div>
    );
  }
}

export default UserLoginPage;
