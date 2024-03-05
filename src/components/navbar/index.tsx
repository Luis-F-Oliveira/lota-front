import { FolderKanban, LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { useUser } from "@/context/user"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

export const Navbar = () => {
    const { logoutUser } = useUser()
    return (
        <nav className="w-full h-12 flex items-center justify-around fixed bg-navbar dark:text-white">
            <h1 className="flex items-center font-bold text-sm">
                <FolderKanban size={20} /> <span className="ml-1">Lotacionograma</span>
            </h1>
            <div>
                <ul className="flex gap-2">
                    <li>
                        <Menubar className="bg-transparent border-0 shadow-none">
                            <MenubarMenu>
                                <MenubarTrigger>
                                    Servidores
                                </MenubarTrigger>
                                <MenubarContent className="">
                                    <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>New Window</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Share</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Print</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </li>
                    <li>
                        <Button onClick={logoutUser} variant={'link'}>
                            <LogOut size={16} /> <span className="ml-1 text-sm">Logout</span>
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
