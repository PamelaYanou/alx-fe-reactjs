import UserContext from './UserContext';
import React, { useContext } from 'react';

function UserProfile (){
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name {userData.name}</p>
      <p>Email {userData.email}</p>
    </div>
  );
};


export default UserProfile;