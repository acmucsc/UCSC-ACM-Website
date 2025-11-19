import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import "./Bio.css";

const StatCard = ({ end, label, color, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, end]);

    return (
        <div className="stat-card" ref={ref}>
            <div className="stat-bar" style={{ backgroundColor: color }}></div>
            <div className="stat-content">
                <h3 style={{ color: color }}>{count}{suffix}</h3>
                <p>{label}</p>
            </div>
        </div>
    );
};

const Bio = () => {
    const communities = [
        { name: "Hacks", short: "hack", color: "#ff9f43", description: "Software Engineering" },
        { name: "Learn", short: "lrn",  color: "#54a0ff", description: "Workshops & Skills" },
        { name: "Alumni", short: "alum", color: "#5f27cd", description: "Networking & Career" },
        { name: "Dev", short: "dev",  color: "#1dd1a1", description: "Web Development" },
        { name: "Research", short: "rsch", color: "#ff6b6b", description: "Academic Research" }
    ];

    return (
        <div className="acm-about">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>
                        UCSC's hub for<br />
                        <span className="hero-highlight blue-light">creativity</span> + 
                        <span className="hero-highlight blue-med"> collaboration</span> + 
                        <span className="hero-highlight blue-dark"> code</span>.
                    </h1>
                    
                    <div className="hero-buttons">
                        <a 
                            href="https://discord.com/invite/XjSuxtbJxK" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hero-join-btn"
                        >
                            Join Us <span className="arrow">›</span>
                        </a>
                        
                        <Link to="/events" className="hero-events-link">
                            Explore Events <span className="arrow">›</span>
                        </Link>
                    </div>
                </div>

                <div className="hero-image-container">
                    <div className="diamond-border">
                        <div className="diamond-inner">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                alt="ACM Group" 
                                className="diamond-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="acm-communities">
                <div className="section-header">
                    <h2>Our Communities</h2>
                    <p>ACM at UCSC consists of 5 communities that each focus on a specific area of tech.</p>
                </div>
                <div className="communities-grid">
                    {communities.map((comm, index) => (
                        <div className="community-card" key={index}>
                            <div className="community-icon" style={{ backgroundColor: comm.color }}>
                                <span>{comm.short}</span>
                            </div>
                            
                            <div className="community-info">
                                <h3 style={{ color: comm.color }}>
                                    <span style={{ fontWeight: '700' }}>ACM</span>
                                    {' '}
                                    <span style={{ fontWeight: '400' }}>{comm.name}</span>
                                </h3>
                                <p>{comm.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="acm-stats-section">
                <div className="stats-header">
                    <h2>Join us</h2>
                    <p>ACM at UCSC is an inclusive community of students passionate about technology.</p>
                </div>
                
                <div className="stats-container">
                    <StatCard end={2000} label="UCSC Members" color="#ff6b6b" />
                    <StatCard end={50} label="Annual Events" color="#ff9f43" />
                    <StatCard end={500} label="Alumni" color="#1dd1a1" />
                </div>
            </div>
        </div>
    );
};

export default Bio;