import React from 'react';

const WorkFull = ({ backgroundImage = '' }) => {
  return (
    <div
      className="Work__Full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default WorkFull;
