import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DemoButton from './demoButton';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>Balance your life</h1>
                <p>When you have control of your money, life seems easier.</p>
                <p>We help get you to an easier life.</p>
                <button className="sign-up-btn">Sign Up Free</button>
                <button className="demo">Want a Demo</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
