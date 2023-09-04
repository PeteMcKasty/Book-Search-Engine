import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './queries'; // Import your queries

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      // Handle successful login here
      console.log(data);
      // Optionally, you can redirect the user or perform other actions after successful login
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ variables: { email, password } });
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>Error: {error.message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
