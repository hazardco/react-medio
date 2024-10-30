import { useQuery } from '@tanstack/react-query';

const API_URL = "http://localhost:5000/usuarios";

// Función para hacer la solicitud a la API para un usuario específico
const fetchUserById = async (userId) => {
  const response = await fetch(`${API_URL}/${userId}`);
  if (!response.ok) {
    throw new Error('Error al obtener los datos del usuario');
  }
  return response.json();
};

// Hook para obtener los datos de un usuario específico
export const useUserById = (userId) => {
  // Usamos el hook `useQuery` para obtener los datos del usuario según su ID
  const userQuery = useQuery({
    queryKey: ["usuario", userId],
    queryFn: () => fetchUserById(userId),
    enabled: !!userId, // Solo ejecuta la consulta si `userId` tiene un valor
    staleTime: 10000, // Datos frescos por 10 segundos
    placeholderData: {
      id: userId,
      nombreCompleto: "Cargando...",
      username: "cargando",
      email: "cargando@example.com",
    },
  });

  return { userQuery };
};
