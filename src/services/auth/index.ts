import { toast } from "react-toastify"

enum Warning {
    emailNull = 'Preencha o email',
    passwordNull = 'Preencha a senha',
    userNotFound = 'Usuário inválido',
    passwordIncorret = 'Senha incorreta'
}

export function AuthService()
{
    function auth(email: string, password: string)
    {
        email === '' ? toast.warning(`${Warning.emailNull}`) : null
        password === '' ? toast.warning(`${Warning.passwordNull}`) : null

        if (email && password !== '') {
            
        }
    }

    return { auth }
}