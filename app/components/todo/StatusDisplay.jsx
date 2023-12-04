import React from 'react';

const StatusDisplay = ({ status }) => {
  return (
    <>
      {status === 'INPROGRESS' ? (
        <div className={`badge badge-info font-medium`}>In Progress</div>
      ) : (
        <div className={`badge badge-success font-medium`}>Finished</div>
      )}
    </>
  );
};

export default StatusDisplay;
