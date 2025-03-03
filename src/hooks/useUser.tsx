import { useContext } from "react"
import authContext from "@/context/auth.context"

function useUser() {
  const data = useContext(authContext)

  return data
}

export default useUser