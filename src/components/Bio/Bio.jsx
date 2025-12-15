import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import socials from "../../data/socials";
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
        { name: "Hacks", short: "hack", color: "#ff9f43", gradient: "linear-gradient(135deg, #ff9f43 0%, #ffc048 100%)", description: "Hackathons", icon: "/hacks.svg" },
        { name: "Learn", short: "lrn", color: "#54a0ff", gradient: "linear-gradient(135deg, #54a0ff 0%, #00d2d3 100%)", description: "Workshops & Skills", icon: "/learn.svg" },
        { name: "Alumni", short: "alum", color: "#5f27cd", gradient: "linear-gradient(135deg, #5f27cd 0%, #9c88ff 100%)", description: "Networking & Career", icon: "/alum.svg" },
        { name: "Dev", short: "dev", color: "#1dd1a1", gradient: "linear-gradient(135deg, #1dd1a1 0%, #55efc4 100%)", description: "Web Development", icon: "/dev.svg" },
        { name: "Research", short: "rsch", color: "#ff6b6b", gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff9ff3 100%)", description: "Academic Research", icon: "/research.svg" }
    ];

    const socialIcons = [
        { key: 'instagram', icon: '/img/instagram.webp' },
        { key: 'discord', icon: '/img/discord.webp' },
        { key: 'linkedin', icon: '/img/linkedin.webp' },
        { key: 'github', icon: '/img/github.webp' }
    ];

    const keyframesStyles = React.useMemo(() => {
        let styles = "";
        const patternCount = 20;
        const steps = 20;
        const stepPercent = 100 / steps;
        const holdPercent = stepPercent / 2;

        const getColor = () => {
            const r = Math.random();
            if (r < 0.2) return "white";
            if (r < 0.5) return "#3b82f6";
            return "#2563eb";
        };

        for (let i = 0; i < patternCount; i++) {
            styles += `@keyframes flashPattern${i} {`;
            let currentColor = getColor();
            styles += `0% { background-color: ${currentColor}; }`;
            styles += `${holdPercent}% { background-color: ${currentColor}; }`;

            for (let s = 1; s <= steps; s++) {
                const nextColor = getColor();
                const stepEnd = s * stepPercent;
                const nextHold = stepEnd + holdPercent;
                styles += `${stepEnd}% { background-color: ${nextColor}; }`;
                if (s < steps) {
                    styles += `${nextHold}% { background-color: ${nextColor}; }`;
                }
            }
            styles += `}\n`;
        }
        return styles;
    }, []);

    const diamondGrid = React.useMemo(() => {
        const rows = 40;
        const cols = 50;
        const diamonds = [];
        const patternCount = 20;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Performance Optimization: Only render visible diamonds
                // Tighter constraint: > 6 covers approx 550px height, safe for 325px container.
                if (Math.abs(r + c - 45) > 6) continue;

                const patternIndex = Math.floor(Math.random() * patternCount);
                diamonds.push(
                    <div
                        key={`${r}-${c}`}
                        className="diamond-item"
                        style={{
                            animationName: `flashPattern${patternIndex}`,
                            animationDuration: '40s',
                            animationTimingFunction: 'linear',
                            animationIterationCount: 'infinite'
                        }}
                    ></div>
                );
            }
        }
        return diamonds;
    }, []);

    return (
        <div className="acm-home-container">
            <div className="diamond-hero-section">
                {/* Dynamic Styles for Blue Fade Patterns */}
                <style>{keyframesStyles}</style>

                <div className="diamond-grid">
                    {diamondGrid}
                </div>

                <div className="hero-text-overlay">
                    <h1>code with purpose.</h1>
                </div>
            </div>

            <div className="acm-communities">
                <div className="section-header">
                    <div className="stats-container" style={{ justifyContent: 'center', marginBottom: '40px' }}>
                        <StatCard end={2000} label="UCSC Members" color="#ff6b6b" />
                        <StatCard end={50} label="Annual Events" color="#ff9f43" />
                        <StatCard end={500} label="Alumni" color="#1dd1a1" />
                    </div>

                    <div className="social-links">
                        {socialIcons.map((item) => (
                            <a key={item.key} href={socials[item.key]} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <div
                                    className="social-icon"
                                    style={{
                                        backgroundColor: '#2563eb',
                                        maskImage: `url(${item.icon})`,
                                        WebkitMaskImage: `url(${item.icon})`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center'
                                    }}
                                />
                            </a>
                        ))}
                    </div>

                    <div className="about-us-section" style={{ marginBottom: '40px' }}>
                        <h2>welcome to ACM at UCSC!</h2>
                        <p>
                            We are the Association for Computing Machinery at UCSC! We are a welcoming community for anyone passionate about computing. whether you're a beginner or an expert, from any major or background, you're welcome here!
                        </p>
                    </div>

                    <h2>our communities</h2>
                </div>
                <div className="communities-grid">
                    {communities.map((comm, index) => (
                        <div className="community-card" key={index}>
                            <div className="community-icon" style={{ background: comm.gradient }}>
                                <img src={comm.icon} alt={comm.name} className="community-svg" />
                            </div>

                            <div className="community-info">
                                <h3>
                                    <span style={{ color: '#000', fontWeight: '800' }}>acm.</span>
                                    <span style={{
                                        background: comm.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: '800'
                                    }}>
                                        {comm.name.toLowerCase()}
                                    </span>
                                </h3>
                                <p>{comm.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Bio;