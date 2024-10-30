import React from 'react'
import { MyDataTable } from '../components/MyDataTable'
import { columns } from '../components/columns'
import { useUsers } from '../../Tanstack/hooks/useUsers'



export const TableIndex = () => {

    const { usersQuery } = useUsers()

    return (
        <>
            <h1 className="text-3xl font-bold">Tabla de gestión con Tanstack Table</h1>
            <div className="container mx-auto py-10">
                <MyDataTable columns={columns} data={usersQuery.data} />
            </div>
        </>

    )
}
