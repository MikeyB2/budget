import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <div className="home">
                <h2>Welcome back!</h2>
                <span><i class="fas fa-user-shield fa-2x"></i></span>
                <LoginForm />
                <Link to="/register" className="register">Sign up! It's FREE!</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
