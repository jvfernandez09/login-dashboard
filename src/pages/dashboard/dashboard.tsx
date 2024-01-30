import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slice/auth.tsx';
import { addUser, setUsers, removeUser } from '../../store/slice/users.tsx';
import { RootState } from '../../store/index.tsx';
import Form from '../../components/form.tsx';
import Table from '../../components/table.tsx';
import { users as mockUsers } from '../../mockdata/users.tsx'; 

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const users = useSelector((state: RootState) => state.users.users); 

  useEffect(() => {
    dispatch(setUsers(mockUsers));
  }, [dispatch]);

  const [formData, setFormData] = useState({
    branchId: 1000,
    userName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    position: '',
    password: '',
  });

  const handleAddUser = () => {
    dispatch(addUser(formData));
    console.log(formData)

    setFormData({
      branchId: 1000,
      userName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      position: '',
      password: '',
    });
  };

  const handleReset = () => {
    setFormData({
      branchId: 1000,
      userName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      position: '',
      password: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: e.target.value,
    }));  
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleRemoveUser = (branchId: number) => {
    dispatch(removeUser(branchId));
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-blue-500 p-4 text-white">
        <div className="text-xl font-semibold">{user?.userName}</div>

        <button
          onClick={handleLogout}
          className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none"
          data-testid='logout-button'
        >
          Logout
        </button>
      </div>

      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Add User</h2>
          <Form
            handleAddUser={handleAddUser}
            handleInputChange={handleInputChange}
            formData={formData}
            setFormData={setFormData}
            handleReset={handleReset}
          />
        </div>

        <div className="md:flex-grow p-4 md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">User Table</h2>
          <div className="overflow-x-auto">
            <Table
              users={users}
              handleRemoveUser={handleRemoveUser}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
