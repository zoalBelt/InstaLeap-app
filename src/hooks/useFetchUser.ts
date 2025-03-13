import { useState } from "react";
import { getUserById } from "../services/userservices/UserServiceGetSingleUserById";
import { User } from "../core/user/User";

/**
 * Hook para obtener un usuario por ID desde la API de ReqRes.
 * Maneja el estado del usuario, el estado de carga y los errores.
 * 
 * @returns {object} Un objeto con el usuario, el estado de carga, el mensaje de error y la función para buscar un usuario.
 */
const useFetchUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (userId: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUserById(userId);
      if (data) {
        setUser(data);
      } else {
        setError("Usuario no encontrado.");
        setUser(null);
      }
    } catch (err) {
      setError("Error al obtener el usuario.");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, fetchUser };
};

export default useFetchUser;
