import { UserData } from "@/@types/user"
import { AxiosInstance } from "axios"
import { toast } from 'react-toastify'

export interface AuthenticateStatus {
    success: boolean
    message?: string
    user?: UserData
}

export function AuthService()
{
    function auth(
        api: AxiosInstance,
        email: string,
        password: string
    ): Promise<AuthenticateStatus> {
        return new Promise((resolve, reject) => {
            if (email === '') {
                toast.warning('Preencha o email')
            } else if (password === '') {
                toast.warning('Preencha a senha')
            } else {
                api.post('login', {
                    "email": email,
                    "password": password
                })
                .then((response) => {
                    if (response.status !== 200) {
                        reject({ 'success': false, 'message': response.data })
                    }

                    const user: UserData = response.data.user
                    resolve({ 'success': true, 'user': user })
                })
                .catch((error) => {
                    if (error.response.status === 404) {
                        toast.error('Usuário não encontrado!')
                    }

                    if (error.response.status === 401) {
                        toast.error('Senha incorreta!')
                    }
                })
            }
        })
    }

    return { auth }
}