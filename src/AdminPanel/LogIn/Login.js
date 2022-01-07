import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  function handleSubmit() {
    if (details.username === "test@admin" && details.password === "test")
      history.push("admin/dashboard");
    else alert("Invalid credentials");
  }

  console.log(details);

  return (
    <div className="login-page">
      <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
      <div class="content">
        <div class="login-lg">
          <h2
            style={{
              marginBottom: "100px",
              fontSize: "24px",
              fontWeight: "bolder",
            }}
          >
            Member Login
          </h2>
          {/* <div class='login-role'>
                        <div className='select-box' style={start?employee:admin}></div>
                        <p style={start?{color:'#000'}:{color:'#fff'}} onClick={() => setStart(false)}>I am admin</p>
                        <p style={start?{color:'#fff'}:{color:'#000'}} onClick={() => setStart(true)}>I am employee</p>
                    </div> */}
          <div>
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                id="username"
                onChange={handleChange}
                placeholder="Username"
                required
              ></input>
              <label for="text" class="form__label">
                Username
              </label>
            </div>
            <div class="form__group">
              <input
                type="password"
                class="form__input"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                required
              ></input>
              <label for="password" class="form__label">
                Password
              </label>
            </div>
          </div>
          <button className="btn-login" onClick={handleSubmit}>
            Login
          </button>
        </div>
        <div class="cover-lg">
          {/* <img alt='' src={imgCover} className='cover-img'></img> */}
          {/* <h3>Artisan inventory system</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
