import React from "react";
import { useAuth } from "./UserAuthContext";

const UserAuthenticationSystem = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col items-center gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Auth Context</h2>
        {user ? (
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-2xl">
              {user.username?.[0]?.toUpperCase() || '?'}
            </div>
            <div className="text-center">
              <p className="text-xs text-zinc-500 mb-1">Authenticated as</p>
              <p className="text-lg font-bold text-white">{user.username}</p>
            </div>
            <div className="w-full py-2 px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Session Active</span>
            </div>
            <button onClick={logout} className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl text-sm font-semibold transition-all">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-2xl text-zinc-600">
              ?
            </div>
            <p className="text-zinc-500 text-sm">No active session</p>
            <button onClick={() => login({ username: "Aman Yadav" })} className="w-full py-3 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Sign In (Mock)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAuthenticationSystem;
