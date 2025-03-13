import axios from "axios";
import { User } from "../../core/user/User";

const API_URL = "https://reqres.in/api/users";

/**
 * Obtiene un usuario por su ID desde la API de ReqRes.
 *
 * @param id - ID del usuario que se desea obtener.
 * @returns Un objeto con los datos del usuario si se encuentra, o `null` si no existe.
 */
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<{ data: User[] }>(API_URL);
    const resoult = response.data;
    return resoult.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
};