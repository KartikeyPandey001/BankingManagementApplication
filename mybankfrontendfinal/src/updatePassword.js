import React, { useState } from "react";

function UpdatePassword({ email, password }) {
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to update password with API call goes here
    console.log(
      `Updating password for ${email} from ${password} to ${newPassword}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-password">New Password:</label>
      <input
        type="password"
        id="new-password"
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <button type="submit">Update Password</button>
    </form>
  );
}

export default UpdatePassword;
