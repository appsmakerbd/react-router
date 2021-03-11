import React from 'react';
import Leagues from '../Leagues/Leagues';
import background from '../../images/banner.jpg';
import './Home.css';

const Home = () => {
    return (
        <>
            <header className="common-banner" style={{ backgroundImage: `url(${background})` }}>
                <h1>European League Informatics (ELI)</h1>
            </header>
            
            <Leagues ></Leagues>
        </>
    );
};

export default Home;