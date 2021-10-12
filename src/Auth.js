import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
   const [currentUser, setCurrentUser] = useState(null);

   return (
      <AuthContext.Provider
         value={{ currentUser, setCurrentUser }}
      >
         {props.children}
      </AuthContext.Provider>
   );
};