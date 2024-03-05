import { useUser } from "@/context/user"
import { ReactNode } from "react"
import { Navbar } from "@/components"

interface BodyProps {
  children: ReactNode
}

export const Body = ({ children }: BodyProps) => {
  const { user } = useUser()
  return (
    <div className={`${ user?.theme ? 'dark' : 'light' } overflow-x-hidden`}>
      <header className="w-screen">
        <Navbar />
      </header>
      <main className="w-screen min-h-screen bg-slate-300 dark:bg-neutral-800 pt-16">
        { children }
      </main>
      <footer>footer</footer>
    </div>
  )
}
