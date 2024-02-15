import { useUser } from "@/context/user"
import { Navigate, useNavigate } from "react-router-dom"
import { useEffect, ReactNode } from "react"

interface PrivateRouteProps {
    children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps)
{
    const { user } = useUser()
    let navigate = useNavigate()

    if (!user) {
        return <Navigate to={'/login'} replace />
    }

    useEffect(() => {
        console.log(user.theme)
    }, [user])

    return children
}