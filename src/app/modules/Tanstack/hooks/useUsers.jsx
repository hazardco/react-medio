import { useQuery } from '@tanstack/react-query';
import React from 'react'

const API_URL = "http://localhost:5000/usuarios";

// Función para hacer la solicitud a la API
const fetchUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al obtener los usuarios');
  }
  return response.json();
};

export const useUsers = () => {

  // Usamos el hook `useQuery` de TanStack Query
  const usersQuery = useQuery({
    queryKey: ["usuarios"],
    queryFn: fetchUsers,
    staleTime: 5000, // Los datos se considerarán "frescos" por 5 segundos }
    //refetchOnWindowFocus: false,
    placeholderData: [{
      "id": "1",
      "nombreCompleto": "Carlos García Pérez",
      "username": "cgarcia",
      "email": "cgarcia@example.com"
    },
    {
      "id": "2",
      "nombreCompleto": "Laura Martínez Rodríguez",
      "username": "lmartinez",
      "email": "lmartinez@example.com"
    },]
  })


  return { usersQuery }
}
