import React from 'react';
import { FormProps } from '../types/form';

const Form: React.FC<FormProps> = ({
  handleAddUser,
  handleInputChange,
  formData,
  setFormData,
  handleReset
}) => {
  return (
    <form className="">
      {[
        { label: 'Branch ID', type: 'number', key: 'branchId' },
        { label: 'Username', type: 'text', key: 'userName' },
        { label: 'First Name', type: 'text', key: 'firstName' },
        { label: 'Middle Name', type: 'text', key: 'middleName' },
        { label: 'Last Name', type: 'text', key: 'lastName' },
        { label: 'Position', type: 'text', key: 'position' },
        { label: 'Password', type: 'password', key: 'password' },
      ].map(({ label, type, key }) => (
        <div key={key} className="mb-4">
          <label className="block text-sm font-medium text-gray-600">{label}:</label>
          <input
            type={type}
            data-testid={key}
            className="mt-1 p-2 w-full border rounded-md"
            value={formData[key]}
            onChange={(e) => handleInputChange(e, key)}
          />
        </div>
      ))}

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none"
          onClick={handleAddUser}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
