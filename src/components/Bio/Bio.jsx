import React from "react";
import "./Bio.css";

const Bio = () => {
    const handleClick = () => {
        alert("Learn more about the events!");
    };

    return (
        <div className="acm-about">
            <div className="acm-title">
                <h1>ACM @ UCSC</h1>
                <p>The largest computer science community at UC Santa Cruz.</p>
                <button onClick={handleClick} className="bio-button">
                    Events
                </button>
            </div>
            <div className="acm-bio">
                <h2>What is ACM? </h2>
                <p>We are a student run organization that strives to create a supportive and inclusive community for people of all backgrounds and skill levels who are passionate about computer science to learn and network.</p>
            </div>
            <div className="acm-communities">
                <h2>Our Communities</h2>
                <ul class="communities-grid">
                    <li>
                        acm.HACKS
                        <div class="hack-logo">hack</div>
                    </li>
                    <li>
                        acm.LEARN
                        <div class="learn-logo">learn</div>
                    </li>
                    <li>
                        acm.ALUMNI
                        <div class="alumni-logo">alumni</div>
                    </li>
                    <li>
                        <p>acm.DEV</p>
                        <div class="dev-logo">dev</div>
                    </li>
                    <li>
                        <p>acm.RESEARCH</p>
                        <div class="research-logo">rsch</div>
                    </li>                    
                </ul>
            </div>
        </div>
    );
};

export default Bio;
