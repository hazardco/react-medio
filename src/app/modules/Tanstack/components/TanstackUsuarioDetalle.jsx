// src/pages/UsuarioDetalle.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserById } from '../hooks/useUserById';
import { Button } from '@/components/ui/button';

export const TanstackUsuarioDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Usar el hook para obtener los datos del usuario
  const { userQuery } = useUserById(id);

  if (userQuery.isLoading) {
    return <p className="text-center text-gray-500">Cargando datos del usuario...</p>;
  }

  if (userQuery.isError) {
    return <p className="text-center text-red-500">Error: {userQuery.error.message}</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Detalles del Usuario</h2>
      <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
        <p><strong>Nombre:</strong> {userQuery.data.nombreCompleto}</p>
        <p><strong>Email:</strong> {userQuery.data.email}</p>
        <p><strong>Usuario:</strong> {userQuery.data.username}</p>
      </div>
      <div className="text-center">
        <Button onClick={() => navigate('/tanstack')} variant="outline">
          Volver a la lista de usuarios
        </Button>
      </div>
    </div>
  );
};
