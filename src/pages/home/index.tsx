import { Button } from "@/components/ui/button"
import { useUser } from "@/context/user"

export const Home = () => {
  const { logoutUser } = useUser()
  return (
    <div>
      <Button onClick={logoutUser} variant={'destructive'}>logout</Button>
    </div>
  )
}
