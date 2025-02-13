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
                    <li>acm.HACKS</li>
                    <li>acm.ALUMNI</li>
                    <li>acm.RESEARCH</li>
                    <li>acm.LEARN</li>
                    <li>acm.DEV</li>
                </ul>
            </div>
        </div>
    );
};

export default Bio;
