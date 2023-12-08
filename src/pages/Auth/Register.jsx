import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import catImg from '../../assets/cat-img.png';
import './Auth.css';
// import { register } from "../../api/authService";

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    console.log(user);
    if (password !== cPassword) return setError('Confirm password not matched');

    // register(user)
    //   .then(() => navigate("/login"))
    //   .catch(error=> {
    //     setError(error.response.data.message);
    //   });
  };

  return (
    <div className="auth">
      <form className="authForm" onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        {error ? <h3 className="alert">{error}</h3> : <></>}
        <input
          className="authInput"
          placeholder="User name..."
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          required
        />

        <input
          className="authInput"
          placeholder="Email..."
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <input
          className="authInput"
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <input
          className="authInput"
          placeholder="Confirm Password..."
          type="password"
          onChange={(e) => setCPassword(e.target.value)}
          value={cPassword}
          required
        />

        <button className="auth-btn" type="submit">
          Register
        </button>
        <div className="authLogin">
          Already a member?<Link to="/login">Join now!</Link>
        </div>
      </form>
      <div className="image_wrapper">
        <img src={catImg} alt="cat image" />
      </div>
    </div>
  );
}
