import axios from "axios";
import { User } from "../../core/user/User";

const API_URL = "https://reqres.in/api/users";

/**
 * Obtiene un usuario por su ID desde la API de ReqRes.
 *
 * @param id - ID del usuario que se desea obtener.
 * @returns Un objeto con los datos del usuario si se encuentra, o `null` si no existe.
 */
export const getUserById = async (id: number): Promise<User | null> => {
  try {
    const response = await axios.get<{ data: User }>(`${API_URL}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${id}:`, error);
    return null;
  }
};