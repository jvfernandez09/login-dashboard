import React from 'react';
import { User } from '../types/auth';

interface UserTableProps {
  users: User[]; 
  handleRemoveUser: (branchId: number) => void;
}

const Table: React.FC<UserTableProps> = ({ users, handleRemoveUser }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2">#</th>
          <th className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">Branch ID</th>
          <th className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">Username</th>
          <th className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">Name</th>
          <th className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">Position</th>
          <th className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">Action</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user, i) => {
          const { branchId, userName, firstName, middleName, lastName, position } = user;
          const fullName = user && `${firstName} ${middleName} ${lastName}`;

          return (
            <tr key={branchId}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">{branchId}</td>
              <td className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">{userName}</td>
              <td className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">{fullName}</td>
              <td className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">{position}</td>
              <td className="border p-2 sm:table-cell md:table-cell lg:table-cell xl:table-cell">
                <button
                  onClick={() => handleRemoveUser(branchId)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Remove
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;
