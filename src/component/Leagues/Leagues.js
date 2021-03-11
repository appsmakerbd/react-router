import React, { useEffect, useState } from 'react';
import ShowLeagues from '../ShowLeagues/ShowLeagues';

const Leagues = () => {
    const [allLeagues,setAllLeagues]=useState([]);
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
        .then(res => res.json())
        .then(data => setAllLeagues(data.countrys))
        .catch(error =>{
            alert('Could not read data'+error)
        })
    },[])
   

    return (
        <div className="greenBg">
            <div className="container">
                <div className="row">
                    {
                    allLeagues.map(league => <ShowLeagues league={league}></ShowLeagues>)                
                    }
                </div>
            </div>
        </div>
        
        
    );
};

export default Leagues;