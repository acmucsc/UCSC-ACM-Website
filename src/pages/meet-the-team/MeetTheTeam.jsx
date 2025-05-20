import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './MeetTheTeam.css';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';

const teamMembers = [
  { name: 'Alice', role: 'President', gradYear: '2025', image: '/images/team/alice.jpg' },
  { name: 'Bob', role: 'Vice President', gradYear: '2026', image: '/images/team/bob.jpg' },
  { name: 'Chloe', role: 'Web Director', gradYear: '2025', image: '/images/team/chloe.jpg' },
  { name: 'David', role: 'Treasurer', gradYear: '2024', image: '/images/team/david.jpg' },
  { name: 'Ella', role: 'Event Lead', gradYear: '2025', image: '/images/team/ella.jpg' },
  { name: 'Frank', role: 'Secretary', gradYear: '2024', image: '/images/team/frank.jpg' },
  { name: 'Grace', role: 'Outreach', gradYear: '2025', image: '/images/team/grace.jpg' },
  { name: 'Henry', role: 'Marketing', gradYear: '2026', image: '/images/team/henry.jpg' },
  { name: 'Ivy', role: 'Logistics', gradYear: '2024', image: '/images/team/ivy.jpg' },
];

const MeetTheTeam = () => {
  return (
    <div className="meet-the-team-page">
      <Navbar />

      <main className="meet-the-team">
        <h1 className="main-title">Meet The Team!</h1>
        <div className="team-photo-placeholder">
          Club Board Photo or whole club?
        </div>
        <h2 className="sub-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
};

export default MeetTheTeam;
