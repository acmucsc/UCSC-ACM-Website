import React from "react";
import { Link } from 'react-router-dom';
import "./Bio.css";

const Bio = () => {

    return (
        <div className="acm-about">
            <div className="acm-title">
                <h1>ACM @ UCSC</h1>
                <p>The largest computer science community at UC Santa Cruz.</p>
                <Link to="/events">
                    <button className="bio-button">Events</button>
                </Link>
                
            </div>
            <div className="acm-bio">
                <h2>What is ACM? </h2>
                <p>We are a student run organization that strives to create a supportive and inclusive community for people of all backgrounds and skill levels who are passionate about computer science to learn and network.</p>
            </div>
            <div className="acm-communities">
                <h2>Our Communities</h2>
                <ul className="communities-grid">
                    <li>
                        <p>acm.HACKS</p>
                        <div className="hack-logo">hack</div>
                    </li>
                    <li>
                        <p>acm.LEARN</p>
                        <div className="learn-logo">learn</div>
                    </li>
                    <li>
                        <p>acm.ALUMNI</p>
                        <div className="alumni-logo">alumni</div>
                    </li>
                    <li>
                        <p>acm.DEV</p>
                        <div className="dev-logo">dev</div>
                    </li>
                    <li>
                        <p>acm.RESEARCH</p>
                        <div className="research-logo">rsch</div>
                    </li>                    
                </ul>
            </div>
        </div>
    );
};

export default Bio;