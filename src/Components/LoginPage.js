import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername]               = useState('');
  const [password, setPassword]               = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission here
    navigate("/home/create");
  }

  function handleCancel(){
    navigate("/");
  }

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Log In</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required placeholder="Enter username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder="Enter password" />
        <button type="submit">Log in</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
  
}

export default LoginPage;