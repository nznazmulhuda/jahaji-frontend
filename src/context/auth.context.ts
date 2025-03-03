"use client"

import { IUser } from "@/providers/auth.provider";
import { createContext } from "react";

export interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export default AuthContext
