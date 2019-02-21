import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends React.Component {


    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        const username = localStorage.getItem('username')

    }


    render() {
        return (
            <div className="dashboard">
                Components go here
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data

    };

};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
