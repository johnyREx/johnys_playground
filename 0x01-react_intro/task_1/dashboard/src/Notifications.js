import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button style={{ float: "right" }} aria-label="Close" onClick={handleClick}>
        <img src={closeIcon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;
