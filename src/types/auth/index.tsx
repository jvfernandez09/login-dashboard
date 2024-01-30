
export interface User {
    branchId: number;
    userName: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    position: string;
  }

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    error: string | null;
}