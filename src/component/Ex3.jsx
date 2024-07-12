import React from 'react';

const CurrentDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  return (
    <div>
      <p>Current Date: {date}</p>
      <p>Current Time: {time}</p>
    </div>
  );
}

export default CurrentDateTime;