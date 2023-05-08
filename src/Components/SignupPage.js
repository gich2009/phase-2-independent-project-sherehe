import { React, useState }from "react";
import { useNavigate } from "react-router-dom";

function SignupPage(){
  const [username, setUsername]               = useState('');
  const [email, setEmail]                     = useState('');
  const [password, setPassword]               = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe]           = useState(false);
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
        <h1>Sign Up</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required placeholder="Enter username" />
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Enter email address" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder="Enter password" />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required placeholder="Confirm password" />
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
        <label htmlFor="remember-me">Remember me</label>
        <button type="submit">Sign Up</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default SignupPage;