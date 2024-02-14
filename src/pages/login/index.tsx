import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from  "@radix-ui/react-label"
import { Lock, Mail } from "lucide-react"
import image from './img.jpg'

declare var particlesJS: any

export const Login = () => {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (particlesRef.current) {
      particlesJS('particles-js', {
      })
    }
  }, [])

  return (
    <div ref={particlesRef} id="particles-js" className="w-screen h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      <div className="w-2/4 h-2/4 bg-white fixed flex rounded-lg">
        <form className="w-1/2 px-16 flex flex-col justify-center rounded-l-lg">
          <Label className="text-emerald-500 flex items-center" htmlFor="email">
            <Mail size={20} /> <span className="ml-1">Email</span>
          </Label>
          <input type="email" id='email' className='mb-3 outline-0 border-b-2 border-emerald-500 text-emerald-500' />
          <Label className="text-emerald-500 flex items-center mt-2" htmlFor="password">
            <Lock size={20} /> <span className="ml-1">Password</span>
          </Label>
          <input type="password" id='password' className='mb-3 outline-0 border-b-2 border-emerald-500 text-emerald-500' />
          <Button 
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
