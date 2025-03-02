import { useContext } from "react"
import authContext, { AuthContextType } from "@/context/auth.context"

function useUser() {
  const data: AuthContextType = useContext(authContext)

  return data
}

export default useUser