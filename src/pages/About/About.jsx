import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import acmLogo from "../../assets/acm-logo2.png";

const communities = [
  { name: "Hacks", short: "hack", color: "#ff9f43", gradient: "linear-gradient(135deg, #ff9f43 0%, #ffc048 100%)", description: "Hackathons", icon: "/hacks.svg" },
  { name: "Learn", short: "lrn", color: "#54a0ff", gradient: "linear-gradient(135deg, #54a0ff 0%, #00d2d3 100%)", description: "Workshops & Skills", icon: "/learn.svg" },
  { name: "Alumni", short: "alum", color: "#5f27cd", gradient: "linear-gradient(135deg, #5f27cd 0%, #9c88ff 100%)", description: "Networking & Career", icon: "/alum.svg" },
  { name: "Dev", short: "dev", color: "#1dd1a1", gradient: "linear-gradient(135deg, #1dd1a1 0%, #55efc4 100%)", description: "Web Development", icon: "/dev.svg" },
  { name: "Research", short: "rsch", color: "#ff6b6b", gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff9ff3 100%)", description: "Academic Research", icon: "/research.svg" }
];

const teamMembers = [
  // Hacks
  { title: "Hacks Lead", name: "Placeholder", community: "Hacks", linkedin: "https://linkedin.com", email: "hacks@acmucsc.org" },
  { title: "Logistics", name: "Placeholder", community: "Hacks", linkedin: "https://linkedin.com", email: "hacks@acmucsc.org" },
  { title: "Sponsorship", name: "Placeholder", community: "Hacks", linkedin: "https://linkedin.com", email: "hacks@acmucsc.org" },
  { title: "Member", name: "Placeholder", community: "Hacks", linkedin: "https://linkedin.com", email: "hacks@acmucsc.org" },
  { title: "Member", name: "Placeholder", community: "Hacks", linkedin: "https://linkedin.com", email: "hacks@acmucsc.org" },
  { title: "Member", name: "Placeholder", community: "Hacks", linkedin: "https://linkedin.com", email: "hacks@acmucsc.org" }, // Added to make even (6)

  // Learn
  { title: "Learn Lead", name: "Placeholder", community: "Learn", linkedin: "https://linkedin.com", email: "learn@acmucsc.org" },
  { title: "Workshop Coordinator", name: "Placeholder", community: "Learn", linkedin: "https://linkedin.com", email: "learn@acmucsc.org" },

  // Alumni
  { title: "Alumni Lead", name: "Placeholder", community: "Alumni", linkedin: "https://linkedin.com", email: "alumni@acmucsc.org" },
  { title: "Outreach", name: "Placeholder", community: "Alumni", linkedin: "https://linkedin.com", email: "alumni@acmucsc.org" },

  // Dev
  { title: "Dev Lead", name: "Placeholder", community: "Dev", linkedin: "https://linkedin.com", email: "dev@acmucsc.org" },
  { title: "Frontend Dev", name: "Placeholder", community: "Dev", linkedin: "https://linkedin.com", email: "dev@acmucsc.org" },
  { title: "Backend Dev", name: "Placeholder", community: "Dev", linkedin: "https://linkedin.com", email: "dev@acmucsc.org" },
  { title: "Dev Member", name: "Placeholder", community: "Dev", linkedin: "https://linkedin.com", email: "dev@acmucsc.org" }, // Added to make even (4)

  // Research
  { title: "Research Lead", name: "Placeholder", community: "Research", linkedin: "https://linkedin.com", email: "research@acmucsc.org" },
  { title: "Coordinator", name: "Placeholder", community: "Research", linkedin: "https://linkedin.com", email: "research@acmucsc.org" },
];

import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "about | acm at ucsc";
  }, []);
  const [selectedCommunity, setSelectedCommunity] = useState("Hacks");

  const filteredMembers = teamMembers.filter(member => member.community === selectedCommunity);
  const currentCommunity = communities.find(c => c.name === selectedCommunity);
  const themeColor = currentCommunity ? currentCommunity.color : "#2563eb";

  return (
    <div className="about-page">
      <Navbar />
      <main className="about-main">

        <section className="about-section about-board">

          <div className="about-intro-wrapper">
            <div className="about-text-content">
              <h2 className="lowercase-title">about us</h2>
              <p className="about-intro-paragraph">
                The Association for Computing Machinery (ACM) at UCSC is the largest computer science community on campus. We are a student-run organization dedicated to fostering a collaborative environment where students can grow their technical skills, build professional networks, and innovate together. Through our diverse committees—Hacks, Learn, Alumni, Dev, and Research—we host hackathons, technical workshops, industry panels, and social events that bridge the gap between academic learning and real-world application. No matter your major or background, if you have a passion for technology, there is a place for you here.
              </p>
            </div>

            {/* Rainbow Gradient Diamond Placeholder */}
            <div className="acm-diamond-container">
              <div className="about-rainbow-diamond"></div>
            </div>
          </div>

          <h2 className="lowercase-title" style={{ marginTop: '4rem', marginBottom: '2rem' }}>meet the board</h2>

          <div className="community-tabs">
            {communities.map((comm) => (
              <div
                key={comm.name}
                className={`community-card-toggle ${selectedCommunity === comm.name ? "active" : ""}`}
                onClick={() => setSelectedCommunity(comm.name)}
              >
                <div className="community-icon-toggle" style={{ background: comm.gradient }}>
                  <img src={comm.icon} alt={comm.name} className="community-svg-toggle" />
                </div>

                <div className="community-info-toggle">
                  <h3>
                    <span className="acm-prefix">acm.</span>
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

          <div className="about-board-grid">
            {filteredMembers.map((member, idx) => (
              <div key={idx} className="about-board-card" style={{ borderColor: themeColor, borderWidth: '3px' }}>
                <h3 className="about-board-name">{member.name}</h3>

                <div className="about-board-img-container">
                  <div
                    className="about-board-logo-placeholder"
                    style={{
                      width: "100%",
                      height: "100%",
                      background: themeColor,
                      opacity: 0.2
                    }}
                  />
                  {/* <img src={acmLogo} ... /> removed as requested */}
                </div>

                <p className="about-board-role">{member.title}</p>

                <div className="about-board-links">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg className="board-social-icon" style={{ color: themeColor }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href={`mailto:${member.email}`} aria-label="Email">
                    <svg className="board-social-icon" style={{ color: themeColor }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
