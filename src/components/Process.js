import React from 'react';
import Link from 'gatsby-link';

const Process = ({ lead, title, intro, processItems = [] }) => (
  <div className="Process">
    <div className="container">
      <div className="row">
        <div className="col-md-5 offset-md-1">
          <h2>
            <span>{lead}</span> <span className="red">{title}</span>
          </h2>
          <p>{intro}</p>
        </div>
      </div>

      <div className="row">
        <div className="Process__grid">
          {processItems.map((node, i) => (
            <div className="Process__item col-md-5" key={i}>
              <img src={node.icon.file.url} alt={`${node.title} Icon`} />
              <div className="Process__item-content">
                <p className="h4">{node.title}</p>
                <p>{node.description.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Process;
