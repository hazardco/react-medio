import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Usuario } from './Usuario';
import { useUsers } from '../hooks/useUsers';
import { Button } from '@/components/ui/button';
import { useDeleteUser } from '../hooks/useDeleteUser';
//import { useCreateUser } from '../hooks/useCreateUser'; // Importa el hook para crear usuario

export const TanStack = () => {
  const { usersQuery } = useUsers(); // custom hook para obtener lista de usarios
  const { deleteUserMutation } = useDeleteUser(); // Usar el custom hook para eliminar usuario
  //const { createUserMutation } = useCreateUser(); // Ejemplo de llamada para el custom hook para crear usuario

  const handleDelete = (userId) => {
    deleteUserMutation.mutate(userId);
  };



  const handleCreateUser = () => {
    // Definir una constante con los datos del nuevo usuario
    // para hacer pruebas de añadir usuario mediante la API
    const newUser = {
      nombreCompleto: 'Jose A. Centeno',
      email: 'joseandres.centeno@juntaex.es',
      username: 'joseandres.centeno',
    };
    console.log("añadido usuario " + newUser.nombreCompleto);

    //createUserMutation.mutate(newUser); // Ejecuta la mutación con los datos del nuevo usuario
  };

  // Renderizado condicional basado en el estado de la consulta
  if (usersQuery.isPending) {
    return <p className="text-center text-gray-500">Cargando usuarios...</p>;
  }

  if (usersQuery.isError) {
    return <p className="text-center text-red-500">Error: {usersQuery.error.message}</p>; // Mostrar mensaje de error
  }

  return (
    <>
      {/* Botón para hacer refetch manual */}
      <div className="text-center mb-4">
        <Button
          onClick={() => usersQuery.refetch()} // Invocar el método refetch cuando se haga clic
          variant="outline"
        >
          Actualizar Usuarios
        </Button>
      </div>

      {/* Botón ejemplo para añadir un nuevo usuario */}
      <div className="text-center mb-4">
        <Button
          onClick={handleCreateUser} // Invocar la función para crear usuario
          variant="outline"
        >
          Añadir Usuario
        </Button>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Lista de Usuarios Tanstack</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usersQuery.data.map((user, index) => (
            <Usuario key={index} user={user} onHandleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </>
  );
};
