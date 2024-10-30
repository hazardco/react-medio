import { ToastAction } from '@/components/ui/toast';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = "http://localhost:5000/usuarios";

// Función para hacer la solicitud DELETE a la API
const deleteUser = async (userId) => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: 'DELETE',
  });
  return response.json();
};

// Custom hook para eliminar usuario
export const useDeleteUser = () => {



  const queryClient = useQueryClient(); // Obtener acceso al cliente de TanStack Query
                                        //para usarlo despues

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (dataDevuelta, idUsuarioPeticion) => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      toast({
        //variant: "destructive",
        description: `Eliminado el usuario ${idUsuarioPeticion}`,
      })
    },
    onError: (error, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      const errorMessage = error.response?.data?.message || error.message || 'Error al eliminar el usuario';
      toast({
        variant: "destructive",
        description: `Error: ${errorMessage}`,
      });
    },
 
  },

  )

  return { deleteUserMutation };
};
