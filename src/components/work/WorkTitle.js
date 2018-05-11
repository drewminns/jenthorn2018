import React from 'react';

const WorkTitle = ({ title = '', description = '' }) => {
  return (
    <div className="Work__Title">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTitle;
