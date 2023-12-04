import React from 'react';

const PriorityDisplay = ({ priority }) => {
  return (
    <div>
      {priority === 'URGENT' ? (
        <div className="badge badge-error font-medium capitalize">Urgent</div>
      ) : priority === 'LOW' ? (
        <div className="badge font-medium">Low</div>
      ) : priority === 'MEDIUM' ? (
        <div className="badge badge-accent font-medium">Medium</div>
      ) : priority === 'HIGH' ? (
        <div className="badge badge-primary font-medium">High</div>
      ) : null}{' '}
    </div>
  );
};

export default PriorityDisplay;
