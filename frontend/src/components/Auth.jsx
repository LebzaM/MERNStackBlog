import React, { useState } from 'react';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div>
      <div className="max-w-lg w-full space-y-8 mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
            {isSignup ? 'Sing up' : 'Log in'}
          </h2>
        </div>
        <form className="mt-6 space-y-6">
          <div>
            {isSignup ? (
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                />
              </div>
            ) : (
              ''
            )}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-purple-600 text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline"
              >
                Submit
              </button>
            </div>
            <div className="mt-4">
              <button type="button" onClick={handleToggle}>
                {isSignup
                  ? 'Already have an account? Login'
                  : "Don't have an account? Sing up"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
