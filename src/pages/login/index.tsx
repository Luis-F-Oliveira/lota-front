import { FormEventHandler, useContext, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from  "@radix-ui/react-label"
import { Lock, Mail } from "lucide-react"
import { useUser } from "@/context/user"
import image from './img.jpg'
import { AuthService, AuthenticateStatus } from "@/services/auth/login"
import { AxiosContext } from "@/context"

declare var particlesJS: any
type StateType<T> = [T, (newValue: T) => void]

export const Login = () => {
  const [ email, setEmail ]: StateType<string> = useState('')
  const [ password, setPassword ]: StateType<string> = useState('')
  const { loginUser } = useUser()
  const { auth } = AuthService()
  const { api } = useContext(AxiosContext)
  const particlesRef = useRef<HTMLDivElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const response: AuthenticateStatus = await auth(api, email, password)

    if (response.success) {
      console.log(response)
    }
  }

  useEffect(() => {
    if (particlesRef.current) {
      particlesJS('particles-js', {
      })
    }
  }, [])

  return (
    <div ref={particlesRef} id="particles-js" className="w-screen h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      <div className="w-2/4 h-2/4 bg-white fixed flex rounded-lg">
        <form onSubmit={handleSubmit} className="w-1/2 px-16 flex flex-col justify-center rounded-l-lg">
          <Label className="text-emerald-500 flex items-center" htmlFor="email">
            <Mail size={20} /> <span className="ml-1">Email</span>
          </Label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" id='email' className='mb-3 outline-0 border-b-2 border-emerald-500 text-emerald-500' />
          <Label className="text-emerald-500 flex items-center mt-2" htmlFor="password">
            <Lock size={20} /> <span className="ml-1">Senha</span>
          </Label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id='password' className='mb-3 outline-0 border-b-2 border-emerald-500 text-emerald-500' />
          <Button 
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-700 active:bg-emerald-500 mt-5"
          >
            LOGIN
          </Button>
        </form>
        <div className="w-1/2">
          <img className="rounded-r-lg w-full h-full" src={image} alt="login-img" />
        </div>
      </div>
    </div>
  )
}
