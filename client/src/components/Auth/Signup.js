import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { username, email, passwordConfirmation, password } = this.state;
    return (
      <div className='App'>
        <h2 className='App'>Signup</h2>
        <Mutation mutation={SIGNUP_USER}>
          {() => {
            return (
              <form className='form'>
                <input
                  type='text'
                  name='username'
                  onChange={this.handleChange}
                  value={username}
                  placeholder='username'
                />
                <input
                  type='email'
                  name='email'
                  onChange={this.handleChange}
                  value={email}
                  placeholder='email'
                />
                <input
                  type='password'
                  name='password'
                  onChange={this.handleChange}
                  value={password}
                  placeholder='password'
                />
                <input
                  type='password'
                  name='passwordConfirmation'
                  onChange={this.handleChange}
                  value={passwordConfirmation}
                  placeholder='confirm password'
                />
                <button className='button-primary'>Submit</button>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signup;
