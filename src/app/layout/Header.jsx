import React from "react"
import {
    CircleUser,
    Menu,
    Package2,
    Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link, useNavigate } from "react-router-dom"
import { removeStateLocalStore } from "@/lib/localstorage"

export const Header = () => {

    const menuItems = [
        {
            name: "Dashboard",
            link: "/"
        },
        {
            name: "Forms",
            link: "/forms",
            items: [
                {
                    name: "Basic Forms",
                    link: "/forms/basic",
                    description: "Formulario básico"
                },
                {
                    name: "Context Forms",
                    link: "/forms/contextforms",
                    description: "Formulario con Context Provider"
                },
                {
                    name: "Redux Forms",
                    link: "/forms/reduxforms",
                    description: "Formulario con REDUX"
                },
            ]
        },
        {
            name: "Cats",
            link: "/cats"
        },
        {
            name: "ShadcnDemo",
            link: "/shadcn"
        },
    ]

    const navigate = useNavigate()

    const handleClick = () => {
        removeStateLocalStore("token")
        navigate("/login")
    }

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    to="#"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <img src="https://www.juntaex.es/o/juntaex-theme/images/logo.png" width={700}></img>
                    <span className="sr-only">Acme Inc</span>
                </Link>

                <NavigationMenu>
                    <NavigationMenuList>
                        {
                            menuItems.map((item) => (
                                <NavigationMenuItem key={item.link}>
                                    {item.items ?
                                        <>
                                            <NavigationMenuTrigger
                                                className={`${navigationMenuTriggerStyle()}`}>
                                                {item.name}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                    {item.items.map((subitem) => (
                                                        <ListItem
                                                            title={subitem.name}
                                                            to={subitem.link}
                                                            key={subitem.link}
                                                        >
                                                            {subitem.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                        :
                                        <NavigationMenuLink
                                            className={`${navigationMenuTriggerStyle()}`} asChild>
                                            <Link to={item.link}>
                                                {item.name}
                                            </Link>
                                        </NavigationMenuLink>
                                    }
                                </NavigationMenuItem>

                            ))
                        }
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <a
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <img src="https://www.juntaex.es/o/juntaex-theme/images/logo.png" width={200}></img>
                            <span className="sr-only">Acme Inc</span>
                        </a>
                        <Link href="/" className="hover:text-foreground">
                            Dashboard
                        </Link>
                        <Link
                            href="/forms/basic"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Forms
                        </Link>
                        <Link
                            to="/forms/contextforms"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            ContextForms
                        </Link>

                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleClick}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef(({ className, title, to, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    to={to}
                    className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = 'ListItem'

export default ListItem