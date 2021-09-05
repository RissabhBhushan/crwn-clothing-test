import React from "react";

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        this.setState({ email: '', password: '' });

        event.preventDefault();
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <input type="email" name="email" values={ this.state.email } onChange={this.handleChange} required />
                    <label >Email</label>
                    <input type="password" name="password" values={ this.state.password } onChange={this.handleChange} required />
                    <label >Password</label>

                    <input type="submit" values='Submit Form' onSubmit={ this.handleSubmit } />
                </form>
            </div>
        );
    }
}

export default SignIn;