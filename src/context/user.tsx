import { createContext, useContext, useEffect, useState } from "react"
import { getUser } from "../api"
import { UserData } from "../@types/user"
import { userMap } from "../mappers/user"


interface UserContextProps {
  user: UserData
  isLoading: boolean
}

interface UserProviderProps {
  children: React.ReactNode
}

const UserContext = createContext({} as UserContextProps)

export const UserProvider = ({children}:UserProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState({} as UserData)
  
  const fetchUser = async() => {
    setIsLoading(true)
    const userResponse = await getUser()
    const userData = userMap(userResponse)
    setUser(userData)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUser()
  },[])

  return (
    <UserContext.Provider value={{user, isLoading}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)