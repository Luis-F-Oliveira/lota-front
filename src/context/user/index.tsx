import { ReactNode, createContext, useState, useContext } from 'react'
import { UserData } from '@/@types/user'

interface UserContextProps {
    user: UserData | null,
    loginUser: (userData: UserData) => void,
    logoutUser: () => void
}

const UserContext = createContext({} as UserContextProps)

export function useUser()
{
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider')
    }
    return context
}

interface UserProviderProps {
    children: ReactNode
}

export function UserProvider({ children }: UserProviderProps)
{
    const [user, setUser] = useState<UserData | null>(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    })

    function loginUser(userData: UserData)
    {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    function logoutUser()
    {
        setUser(null)
        localStorage.removeItem('user')
        window.location.reload()
    }

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            { children }
        </UserContext.Provider>
    )
}