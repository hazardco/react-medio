import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}