// File: UserContextProvider.jsx

import React, { createContext, useState } from 'react';

// 1. Create a context object
export const UserContext = createContext();

function UserContextProvider({ children }) {
  // 2. Create a state to hold user info
  const [user, setUser] = useState({
    name: 'Blueee',
    role: 'Student',
  });

  return (
    // 3. Provide the user data and setter to child components
    <UserContext.Provider value={{ user, setUser }}>
      {children} {/*Basically paasses everything to the rests , any other file can now use value={{ user, setUser }} */}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
