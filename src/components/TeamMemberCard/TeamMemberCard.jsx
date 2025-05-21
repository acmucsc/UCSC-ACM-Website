import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, role, gradYear, image }) => {
  return (
    <div className="team-card">
      <div className="profile-pic">
        <img src={image} alt={`${name}`} />
      </div>
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      <p className="team-grad">Graduation {gradYear}</p>
    </div>
  );
};

export default TeamMemberCard;
