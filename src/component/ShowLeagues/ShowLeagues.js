import React from 'react';
import './ShowLeagues.css';
import demoLogo from '../../images/demo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShowLeagues.css';

const ShowLeagues = (props) => {
    const {idLeague,strBadge,strLeague,strSport}=props.league;
    let img;
    img=!strBadge ? img=demoLogo : img=strBadge;
    const url=`/league/${idLeague}`;
    return (
        
        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 league-box" id={idLeague}>
            <div className="inner-box">
                <div className="badge">
                    <img src={img} alt={strLeague}/>
                </div>
                <div className="short-detail">
                    <h2>{strLeague}</h2>
                    <p>Sports Type: {strSport} </p>
                    <Link to={url}>Explore <FontAwesomeIcon icon={["fas", "arrow-right"]} /></Link>
                </div>
            </div>
        </div>
    );
};

export default ShowLeagues;