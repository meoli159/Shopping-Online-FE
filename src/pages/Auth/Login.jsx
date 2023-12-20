import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { login } from '../../api/authService';
import './Auth.css';
import catImg from '../../assets/cat-img.png';
export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    console.log('handle login', user);
    // login(user,dispatch).then(()=>{navigate("/app");})
    // .catch(error =>{
    //  setError(error.response.data.message)
    // })
  };

  return (
    <div className="auth">
      <form className="authForm" onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        {error ? <h3 className="alert">{error}</h3> : <></>}
        <input
          className="authInput"
          placeholder="Email..."
          type="text"
          name="email"
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

        <div className="forgot-password-wrapper">
          Forgot your password?
          <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
            Click here!
          </Link>
        </div>

        <button className="auth-btn" type="submit">
          Login
        </button>
        <div className="authRegister">
          Not a member?
          <Link to="/register">Register now!</Link>
        </div>
      </form>
      <div className="image_wrapper">
        <img src={catImg} alt="cat image" />
      </div>
    </div>
  );
}
