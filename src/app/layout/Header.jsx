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
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link } from "react-router-dom"

export const description =
    "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export const Header = () => {
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <a
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <img src="https://www.juntaex.es/o/juntaex-theme/images/logo.png" width={700}></img>
                    <span className="sr-only">Acme Inc</span>
                </a>
                <Link
                    to="/"
                    className="text-foreground transition-colors hover:text-foreground"
                >
                    Dashboard
                </Link>
                <Link
                    to="/forms"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Forms
                </Link>
                <Link
                    to="/contextforms"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    ContextForms
                </Link>
                <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Customers
                </a>
                <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Analytics
                </a>
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
                            href="/forms"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Forms
                        </Link>
                        <a
                            href="/contextforms"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            ContextForms
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Customers
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Analytics
                        </a>
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
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
