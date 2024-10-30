// src/pages/UsuarioDetalle.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const fetchUserById = async (userId) => {
  const response = await fetch(`http://localhost:5000/usuarios/${userId}`);
  if (!response.ok) {
    throw new Error('Error al obtener los datos del usuario');
  }
  return response.json();
};

export const TanstackUsuarioDetalleFetch = () => {
  const { id } = useParams(); // Obtener el ID del usuario desde la URL
  const navigate = useNavigate();

  // Estados para manejar datos, error y carga
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true); // Inicia la carga
      setError(null); // Resetea el error
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false); // Termina la carga
      }
    };

    loadUser();
  }, [id]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Cargando datos del usuario...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Detalles del Usuario</h2>
      
      {/* Mostrar datos del usuario */}
      <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
        <p><strong>Nombre:</strong> {user.nombreCompleto}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Usuario:</strong> {user.username}</p>
      </div>

      {/* Botón para volver atrás */}
      <div className="text-center">
        <Button onClick={() => navigate('/tanstack')} variant="outline">
          Volver a la lista de usuarios
        </Button>
      </div>
    </div>
  );
};
