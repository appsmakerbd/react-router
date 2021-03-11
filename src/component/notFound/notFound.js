import React from 'react';
import { Link } from 'react-router-dom';

const notFound = () => {
    return (
        <div>
            <h1>404 Page not Found!</h1>
            <h4>Please Come Back Later</h4>
            <Link to="/home">Go To Home</Link>
        </div>
    );
};

export default notFound;