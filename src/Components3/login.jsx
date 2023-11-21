import React, { useState } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const ProfilePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const renderPopupContent = () => {
    return (
      <Popover id="profile-popover">
        <Popover.Content>
          <ul>
            <li>Profile Completion: 60%</li>
            <li>Subscription</li>
            <li>Update Job Preference</li>
            <li>Update Document</li>
            <li>Hiring Process</li>
            <li>Log Out</li>
          </ul>
        </Popover.Content>
      </Popover>
    );
  };

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      show={showPopup}
      onToggle={handlePopupToggle}
      overlay={renderPopupContent()}
    >
      <Button variant="primary">Login</Button>
    </OverlayTrigger>
  );
};

export default ProfilePopup;
