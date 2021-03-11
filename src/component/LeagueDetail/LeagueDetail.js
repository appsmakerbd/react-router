import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import demoLogo from '../../images/demo.png';
import backgroundLeague from '../../images/banner2.jpg';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LeagueDetail.css';
import { Link } from 'react-router-dom';


const LeagueDetail = () => {
    const {leagueId}=useParams()
    const [leagueDetail,setLeagueDetail]=useState({});
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
        .then(res => res.json())
        .then(data => setLeagueDetail(data.leagues[0]))
        .catch(error =>{
            alert('Data Loading Failed'+error)
        })
    },[leagueId])
    
     const {strLogo,strLeague,dateFirstEvent,strCountry,strSport,strGender,strDescriptionEN,strDescriptionFR,strFacebook,strTwitter,strYoutube}=leagueDetail;
    
    //const {idLeague,dateFirstEvent}=leagueDetail;
    
    let fbUrl='';
    !strFacebook? fbUrl=`#` : fbUrl=strFacebook;
    console.log(fbUrl)
    //If Logo not Found Condition start
    let img;
    img=!strLogo ? img=demoLogo : img=strLogo;
    //Condition End


    //If Logo not Found Condition start
    let genderImage;
    strGender==="Male" ? genderImage=maleImage : genderImage=femaleImage;
    //Condition End
    


    return (
        <>
            <header className="container-fluid text-center common-banner"  style={{ backgroundImage: `url(${backgroundLeague})`,backgroundPosition:"center -400px" }}>
               <img style={{width:"200px",margin:"auto"}} src={img} alt="Image"/>
            </header>

            <div className="greenBg container-fluid leagueInfo">
                <div className="container ">
                    <div className="row detail-box">
                            <div className="col-lg-7">
                                <h2>{strLeague}</h2>
                                <p><FontAwesomeIcon icon={["fas", "map-marker"]} /> Founded: {dateFirstEvent}</p>
                                <p><FontAwesomeIcon icon={["fas", "flag"]} /> Country: {strCountry}</p>
                                <p><FontAwesomeIcon icon={["fas", "futbol"]} /> Sport Type: {strSport}</p>
                                <p><FontAwesomeIcon icon={["fas", "mars-stroke"]} /> Gender: {strGender}</p>
                                
                            </div>
                            <div className="col-lg-5 gender-img-box">
                                <img src={genderImage} alt={strGender}/>
                            </div>
                    </div>

                    <div className="row">
                        <div className=" col-lg-12 leagueDetail">
                            <h5>Detail in (EN)</h5>
                            <p>{strDescriptionEN}</p>
                        </div>

                        <div className="col-lg-12 leagueDetail">
                            <h5>Detail in (FR)</h5>
                            <p>{strDescriptionFR}</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center footer-social">
                        
                        <a href={`https://${strFacebook}`}>
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                        </a>

                        <a href={`https://${strTwitter}`}>
                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </a>

                        <a href={`https://${strYoutube}`}>
                            <FontAwesomeIcon icon={["fab", "youtube"]} />
                        </a>
                    </div>
                    <div className="text-center gotoHome" >
                        <Link to="/home"><FontAwesomeIcon icon={["fas", "chevron-left"]} /> Go to Home</Link>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
};

export default LeagueDetail;