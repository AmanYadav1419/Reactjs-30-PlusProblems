// question :- Implement a basic authentication form with login and registration.

import React, { useState } from "react";

const BasicLoginAndRegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsRegistered, setIsRegistered] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = () => {
    if (IsRegistered) {
      // login
      if (IsRegistered) {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
          setisLogin(true);
        }
        else {
          alert('Login Failed! Please check your Credentials');
        }
      }
    } else {
      // register 
      const newUser = { email, password }
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
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
        {isLogin ? (
          <div className="text-center flex flex-col gap-6">
            <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase mb-2">Dashboard</h2>
            <div className="bg-[#18181c] rounded-xl p-6 border border-white/5">
              <span className="text-sm text-zinc-500 block mb-1">Authenticated as</span>
              <span className="text-white font-medium">{email}</span>
            </div>
            <button onClick={handleLogout} className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl text-sm font-semibold transition-all">
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <h1 className="text-xl font-bold text-white tracking-tight">{IsRegistered ? "Welcome back" : "Create an account"}</h1>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-zinc-500 font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#18181c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-zinc-500 font-medium" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#18181c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <button onClick={handleAuthentication} className="mt-2 w-full py-3 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {IsRegistered ? "Sign In" : "Register"}
              </button>
            </form>

            <div className="flex flex-col items-center gap-2 pt-4 border-t border-white/5">
              <span className="text-xs text-zinc-500">
                {IsRegistered ? "Need an account?" : "Already have an account?"}
              </span>
              <button onClick={() => setIsRegistered(!IsRegistered)} className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
                {IsRegistered ? "Create one now" : "Sign in instead"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicLoginAndRegistrationForm;
