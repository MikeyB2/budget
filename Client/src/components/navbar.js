import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken, clearUsername } from '../local-storage';

const customStyles = {
    content: {
        top: '20%',
        left: '80%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)',

    }
};

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
                    <div id="myLinks">
                        <a href="/" className="active"> Dashboard</a>
                        <a href="#news" onClick={() => this.logOut()}>News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <li className="currentUser"><strong>{username}</strong></li>
                        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
            );
        };
        let loginNav;
        if (!this.props.loggedIn) {
            loginNav = (
                <div className="topnav">
                    <div id="myLinks">
                        <a href="/" className="active"> Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <div className="topnav-right">
                            <a href="/register" className="sign-up-btn">Sign Up Free</a>
                            <a href="/login" className="login-btn"><i className="fas fa-lock"></i> Login</a>
                        </div>
                        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                            <i className="fa fa-bars"></i>
                        </a>
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
