import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

import { loginSuccess, loginFailure } from '../../store/slice/auth.tsx';
import { RootState } from '../../store/index.tsx';
import { users } from '../../mockdata/users.tsx';

const LoginPage = () => {
  const [branchId, setBranchId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errorMsg = useSelector((state: RootState) => state.auth.error);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 


  const handleLogin = () => {
    const user = users.find(
      (u) => u.userName === username && u.branchId === +branchId
    );

    if (user) {
      if (user.password === password) {
        dispatch(loginSuccess(user));
        navigate('/dashboard');
      } else {
        dispatch(loginFailure('Incorrect password'));
      }
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4" >Login</h2>

        <div className="mb-4">
          <label htmlFor="branchId" className="block text-sm font-medium text-gray-600">
            Branch ID
          </label>
          <input
            type="text"
            id="branchId"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Branch ID"
            value={branchId}
            onChange={(e) => setBranchId(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 text-black font-bold p-2 rounded-md w-full"
          onClick={handleLogin}
          data-testid='login-button'
        >
          Login
        </button>

        {errorMsg && (
          <p className="text-red-500 text-sm mb-4 bg-red-200 rounded-md font-bold p-2 mt-2"> Error: {errorMsg}</p>
        )}

      </div>
    </div>
  );
};

export default LoginPage;
