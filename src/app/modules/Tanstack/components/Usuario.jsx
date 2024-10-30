import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Usuario = ({ user, onHandleDelete }) => {
  return (

    <li key={user.username} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-center space-x-4">
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-lg">
        {user.nombreCompleto[0]} {/* Inicial del nombre */}
      </div>
      <div className="text-gray-700">
        <Link
          to={`/tanstack/${user.id}`}
          className="text-xl font-semibold hover:text-red-300"
        >
          {user.nombreCompleto}
        </Link>
        <p className="text-gray-500">@{user.id}</p>
        <p className="text-gray-500">@{user.username}</p>
        <p className="font-medium text-gray-600 mt-2">Email: {user.email}</p>
        {/* Botón con ícono para eliminar usuario alineado abajo */}
        <div className="flex justify-end mt-auto">
          <Button
            onClick={() => onHandleDelete(user.id)}
            variant="ghost"
            className="text-red-500 hover:bg-red-100"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </li>
  )
}
