import { createContext } from "react";

export interface AuthContextType {
  user: string | null;
  isLoading: boolean;
}

const authContext = createContext<AuthContextType>({ user: null, isLoading: false });

export default authContext
