import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './MeetTheTeam.css';


const MeetTheTeam = () => {
  useEffect(() => {
    document.title = "committees | acm at ucsc";
  }, []);
  const communities = [
    { name: "Hacks", short: "hack", color: "#ff9f43", gradient: "linear-gradient(135deg, #ff9f43 0%, #ffc048 100%)", description: "Hackathons", icon: "/hacks.svg", longDescription: "Our Hacks committee organizes exciting hackathons where students can collaborate, innovate, and build amazing projects in a short amount of time. Join us to challenge yourself and meet fellow creators!" },
    { name: "Learn", short: "lrn", color: "#54a0ff", gradient: "linear-gradient(135deg, #54a0ff 0%, #00d2d3 100%)", description: "Workshops & Skills", icon: "/learn.svg", longDescription: "The Learn committee is dedicated to hosting workshops and skill-building sessions. Whether you want to master a new language or pick up specific technical skills, we provide the resources you need to grow." },
    { name: "Alumni", short: "alum", color: "#5f27cd", gradient: "linear-gradient(135deg, #5f27cd 0%, #9c88ff 100%)", description: "Networking & Career", icon: "/alum.svg", longDescription: "Connect with our vast network of alumni! This committee focuses on career development, networking events, and maintaining strong ties with former members who are now out in the industry." },
    { name: "Dev", short: "dev", color: "#1dd1a1", gradient: "linear-gradient(135deg, #1dd1a1 0%, #55efc4 100%)", description: "Web Development", icon: "/dev.svg", longDescription: "The Dev committee handles our web presence and software projects. If you're interested in web development, open source contributions, or building tools for the club, this is the place for you." },
    { name: "Research", short: "rsch", color: "#ff6b6b", gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff9ff3 100%)", description: "Academic Research", icon: "/research.svg", longDescription: "Explore the world of academic research. We help connect students with research opportunities, host talks by professors, and discuss the latest advancements in computing." }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header + buffer
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="meet-the-team-page">
      <Navbar />

      <main className="meet-the-team-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar-nav">
          <div className="sidebar-sticky">
            {communities.map((comm, index) => (
              <div
                key={index}
                className="sidebar-icon-wrapper"
                onClick={() => scrollToSection(comm.short)}
                style={{ background: comm.gradient, cursor: 'pointer' }}
                title={comm.name}
              >
                <img src={comm.icon} alt={comm.name} className="sidebar-icon-img" />
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="content-area">
          <h1 className="main-title">Our Committees</h1>
          <p className="intro-text">
            ACM at UCSC is built on the dedication of our various committees.
            Each one plays a vital role in fostering our community.
          </p>

          <div className="committees-list">
            {communities.map((comm, index) => {
              const isReverse = index % 2 !== 0; // Even=Normal (Text Left), Odd=Reverse (Text Right)

              return (
                <div key={index} id={comm.short} className="committee-section">

                  <div className={`committee-section-flex ${isReverse ? 'reverse' : ''}`}>

                    {/* Text Content */}
                    <div className="committee-content">
                      <div className="committee-header">
                        <div
                          className="title-gradient-bg"
                          style={{
                            background: `radial-gradient(ellipse closest-side at center, ${comm.color}80 0%, transparent 100%)`
                          }}
                        />
                        <h2 className="committee-title">{comm.name.toLowerCase()}</h2>
                      </div>
                      <h3 className="committee-short-desc">{comm.description}</h3>
                      <p className="committee-long-desc">{comm.longDescription}</p>
                    </div>

                    {/* Diamond Visual */}
                    <div className="committee-diamond-visual">
                      <div className="committee-diamond-backdrop" style={{ background: comm.color }}></div>
                      <div className="committee-diamond-border" style={{ '--gradient': comm.gradient }}>
                        <div className="committee-diamond-inner" style={{ '--gradient': comm.gradient }}></div>
                      </div>
                    </div>

                  </div>

                  {index < communities.length - 1 && (
                    <div className="committee-separator">
                      <div className="separator-line" style={{ background: comm.gradient }}></div>
                      <div className="separator-dot" style={{ borderColor: comm.color }}></div>
                      <div className="separator-line" style={{ background: comm.gradient }}></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
};

export default MeetTheTeam;
