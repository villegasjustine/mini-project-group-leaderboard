import React, { useState } from 'react';
import { users } from '../data/users';


export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();

    // Find the user with the entered username
    const user = users.find((user) => user.username === username);

    if (user) {
      if (password === 'password') {
        // Successfully logged in
        setErrorMessage('');
        alert(`Welcome, ${user.name}! You are logged in as a ${user.type}.`);
        // make user go to homepage
      } else {
        setErrorMessage('Incorrect password');
      }
    } else {
      setErrorMessage('User not found');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
}


