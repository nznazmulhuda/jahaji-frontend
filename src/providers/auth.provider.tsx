"use client"

import React, { ReactNode } from 'react'
import AuthContext, { AuthContextType } from '@/context/auth.context'

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

function Authprovider({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<IUser | null>(null)
  // const [isLoading, setIsLoading] = useState(true)

  const user = null
  const isLoading = false

  const authValue: AuthContextType = {
    user,
    isLoading
  }

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider