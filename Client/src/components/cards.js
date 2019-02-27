import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

export function Cards(props) {
    return (
        <div className="card">
            <span><i className="fas fa-calendar-check fa-2x"></i></span>
            <h1>Tailored Jeans</h1>
            <p className="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
    );
}


export default (Cards);
