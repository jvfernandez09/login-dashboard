export interface FormProps {
    handleAddUser: () => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    handleReset: () => void;
  }
  
  export interface FormData {
    branchId: number;
    userName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    position: string;
    password: string;
  }
  