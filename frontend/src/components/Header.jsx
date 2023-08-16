import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold">
          <Link to="/">My Blog</Link>
        </h1>
        <nav className="flex gap-6 items-center text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/user-blog">User Blog</Link>
          <Link to="/add-blog">Add Blog</Link>
        </nav>
        <div className="flex gap-2">
          <button to="/auth" className="bg-slate-800 px-4 py-2 rounded-full">
            <Link to="/auth">Login</Link>
          </button>
          <button className="bg-slate-800 px-4 py-2 rounded-full">
            <Link to="/auth">Signup</Link>
          </button>
          <button to="/auth" className="bg-slate-800 px-4 py-2 rounded-full">
            <Link to="/auth">Logout</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
