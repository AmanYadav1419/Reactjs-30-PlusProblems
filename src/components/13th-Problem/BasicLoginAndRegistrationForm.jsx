// question :- Implement a basic authentication form with login and registration.

import React, { useState } from "react";

const BasicLoginAndRegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsRegistered, setIsRegistered] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = () => {
    if(IsRegistered){
      // login
      if(IsRegistered){
        const user = users.find((u)=> u.email === email && u.password === password);
        if(user){
          setisLogin(true);
        }
        else{
          alert('Login Failed! Please check your Credentials');
        }
      }
    }else{
      // register 
      const newUser = {email, password}
      setUsers([...users, newUser])

      // localhost pe save karna 
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setisLogin(true);
    }
  }


  const handleLogout = () => {
    setisLogin(false);
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      {isLogin ? (
        <div>
          <h2>Welcome !! {email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <form>
            <h1>{IsRegistered ? "Login" : "Register"}</h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email *"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password *"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleAuthentication}>
              {IsRegistered ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {IsRegistered
              ? "Don't have an account? Register Now"
              : "Already have an Account? Login Now"}
          </p>
          <button onClick={() => setIsRegistered(!IsRegistered)}>
            {IsRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BasicLoginAndRegistrationForm;
