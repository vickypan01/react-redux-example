import React from "react";
import { useLocation } from "react-router-dom";

const UserloginCredentials = () => {
  const { state } = useLocation();
  const userData = state?.userData;
  console.log("User Data:", userData);
  return (
    <div>
      <h2>User Login Credentials Page</h2>
      <p>This is where user login credentials will be displayed.</p>
      <hr />
      <p>
        <strong>Access Token</strong>: <span className="wrap"></span>
        {userData?.accessToken}
      </p>
      <p>
        <strong>Refresh Token</strong>: {userData?.refreshToken}
      </p>
      <p>
        <strong>Email</strong>: {userData?.email}
      </p>
      <p>
        <strong>Full Name</strong>: {userData?.firstName} {userData?.lastName}
      </p>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default UserloginCredentials;
