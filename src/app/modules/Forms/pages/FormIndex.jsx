import React from 'react'
import { Tabs } from '@radix-ui/react-tabs'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UncontrolledForm } from '../components/UncontrolledForm';
import { ControlledForm } from '../components/ControlledForm';
import { RHForm } from '../components/RHForm';
import { RHFormZod } from '../components/RHFormZod';
import { ShadcnForm } from '../components/ShadcnForm';


const tabItems = [
    // Agrega más tabs según sea necesario
    { value: 'uncontrolled', title: 'Uncontrolled', component: <UncontrolledForm /> },
    { value: 'controlled', title: 'Controlled', component: <ControlledForm /> },
    { value: 'rhform', title: 'RHForm', component: <RHForm /> },
    { value: 'rHFormZod', title: 'RHFormZod', component: <RHFormZod /> },
    { value: 'ShadcnForm', title: 'ShadcnForm', component: <ShadcnForm /> },

];



export const FormIndex = () => {
    return (
        <>
            <h1 className='text-3xl font-bold'>Formularios en React</h1>
            <Tabs orientation="horizontal" defaultValue="Uncontrolled" className="w-full">
                <TabsList >
                    {tabItems.map((item) => (
                        <TabsTrigger className="sm:w-full md:w-full" key={item.value} value={item.value}>
                            {item.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabItems.map((item) => (
                    <TabsContent key={item.value} value={item.value}>
                        <div className="mt-8">{item.component}</div>
                    </TabsContent>
                ))}
            </Tabs>
        </>
    )
}
