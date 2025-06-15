// File: UserProfile.jsx

import React, { useContext } from 'react';
import { UserContext } from './UserContextProvider';

function UserProfile() {
  // 1. Access context values using useContext
  const { user, setUser } = useContext(UserContext);

  const handleChangeName = () => {
    // 2. Update the user name using setUser from context
    setUser(prev => ({ ...prev, name: 'React Dev' }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>useContext Hook Example</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <button onClick={handleChangeName}>
        Change Name
      </button>
    </div>
  );
}

export default UserProfile;
