import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccordionDemo } from "../components/AccordionDemo"
import { ButtonDemo } from "../components/ButtonDemo"
import { ContextMenuDemo } from "../components/ContextMenuDemo"
import { MenuBarDemo } from "../components/MenuBarDemo"
import { SheetDemo } from "../components/SheetDemo"
import { AlertDemo } from "../components/AlertDemo"
import { AlertDialogDemo } from "../components/AlertDialogDemo"
import { DialogDemo } from "../components/DialogDemo"
import { Toast } from "@/components/ui/toast"
import { ToastSimple } from "../components/ToastDemo"
import { SonnerToastDemo } from "../components/SonnerToastDemo"

const tabItems = [
    // Agrega más tabs según sea necesario
    { value: 'alert', title: 'Alert', component: <AlertDemo /> },
    { value: 'accordion', title: 'Accordion', component: <AccordionDemo /> },
    { value: 'button', title: 'Button', component: <ButtonDemo /> },
    { value: 'contextmenu', title: 'Context Menu ', component: <ContextMenuDemo /> },
    { value: 'Menubar', title: 'MenuBar ', component: <MenuBarDemo /> },
    { value: 'Sheet', title: 'Sheet', component: <SheetDemo /> },
    { value: 'AlerDialog', title: 'Alert Dialog', component: <AlertDialogDemo /> },
    { value: 'DialogDemo', title: 'DialogDemo', component: <DialogDemo /> },
    { value: 'Toast', title: 'Toast', component: <ToastSimple /> },
    { value: 'SonnerToastDemo', title: 'SonnerToastDemo', component: <SonnerToastDemo /> },
].sort((a, b) => a.title.localeCompare(b.title));


export const ShadcnIndex = () => {
    return (
            <Tabs orientation="horizontal" defaultValue="accordion" className="w-full">
                <TabsList >
                    {tabItems.map((item) => (
                        <TabsTrigger className="sm:w-full md:w-[130px]" key={item.value} value={item.value}>
                            {item.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabItems.map((item) => (
                    <TabsContent key={item.value} value={item.value}>
                        <div className="w-3/5 m-8">{item.component}</div>
                    </TabsContent>
                ))}
            </Tabs>
    )
}
