import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { SIGNUP_USER } from '../../queries';
import Error from '../Error';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

class Signup extends Component {
  state = { ...initialState };

  clearState = () => this.setState({ ...initialState });

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(data => {
      console.log(data);
      this.clearState();
    });
  };

  validateForm = () => {
    const { username, email, passwordConfirmation, password } = this.state;
    const isInvalid =
      !username || !email || !password || password !== passwordConfirmation;
    return isInvalid;
  };

  render() {
    const { username, email, passwordConfirmation, password } = this.state;
    return (
      <div className='App'>
        <h2 className='App'>Signup</h2>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ username, email, password }}
        >
          {(signupUser, { data, loading, error }) => {
            return (
              <form
                className='form'
                onSubmit={event => this.handleSubmit(event, signupUser)}
              >
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
                <button
                  disabled={loading || this.validateForm()}
                  className='button-primary'
                >
                  Submit
                </button>
                {error && <Error error={error}></Error>}
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signup;
