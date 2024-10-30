import React from 'react';
import { Tabs } from '@radix-ui/react-tabs';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Traditional } from '../components/Traditional';
import { TanStack } from '../components/Tanstack';
import { TanstackUsuarioDetalle } from '../components/TanstackUsuarioDetalle';

const tabItems = [
  { value: 'TraditionalFetch', title: 'TraditionalFetch', component: <Traditional /> },
  { value: 'TanstackFetch', title: 'TanstackFetch', component: <TanStack /> },
  //{ value: 'UsuarioDetalle', title: 'UsuarioDetalle', component: <TanstackUsuarioDetalle /> },
];

export const TanstackIndex = () => {


  return (
    <>
      <h1 className="text-3xl font-bold">Gestión de asincronía con Tanstack Query</h1>
      <Tabs
        orientation="horizontal"
        defaultValue="TanstackFetch" // Configura la pestaña predeterminada `TanstackFetch`
        className="w-full"
        //onValueChange={handleTabChange}
      >
        <TabsList>
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
  );
};
