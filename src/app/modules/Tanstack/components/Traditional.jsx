import React, { useEffect, useState } from 'react';
import { Usuario } from './Usuario';

const API_URL = "http://localhost:5000/usuarios";

export const Traditional = () => {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Usamos useEffect para hacer la petición a la API cuando el componente se monta
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }
        const data = await response.json();
        setUsers(data); // Guardamos los datos obtenidos en el estado
        setLoading(false); // Terminamos la carga
      } catch (error) {
        setError(error.message); // Guardamos el error
        setLoading(false); // Terminamos la carga incluso si hay error
      }
    };

    fetchUsers(); // Ejecutamos la función de carga
  }, []);

  // Renderizamos la lista de usuarios
  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Lista de Usuarios Fetch</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user,index) => (
          <Usuario key={index} user={user}/>
        ))}
      </ul>
    </div>
  );
};

