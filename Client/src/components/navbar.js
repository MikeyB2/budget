import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken, clearUsername } from '../local-storage';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    constructor() {
        super();

        this.state = {
        };
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.', e);
    };

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        clearUsername();
    }

    render() {
        let logOutNav;
        const username = localStorage.getItem('username');

        if (this.props.loggedIn) {
            logOutNav = (
                <div className="topnav" id="myTopnav">
                    <Link to="/" className="active"> Dashboard</Link>
                    <Link to="#" onClick={() => this.logOut()}>Logout</Link>
                    <Link to="#contact">Contact</Link>
                    <Link to="#about">About</Link>
                    <li className="currentUser"><strong>{username}</strong></li>
                    <Link to="javascript:void(0);" className="icon" onClick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </Link>
                </div>
            );
        };
        let loginNav;
        if (!this.props.loggedIn) {
            loginNav = (
                <div className="topnav" id="myTopnav">
                    <Link to="/" className="active"> Home</Link>
                    <Link to="#contact">Contact</Link>
                    <Link to="#about">About</Link>

                    <Link to="javascript:void(0);" className="icon" onClick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </Link>
                    <div className="topnav-right">
                        <Link to="/register" className="sign-up-nav topnav-right">Sign Up Free</Link>
                        <Link to="/login" className="login-btn topnav-right"><i className="fas fa-lock"></i> Login</Link>
                    </div>
                </div>
            );
        };


        return (
            <div className="navbar">
                <img src="balance.png" className="chatBubble" alt="" />
                {logOutNav}
                {loginNav}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});



export default connect(mapStateToProps)(Navbar);
