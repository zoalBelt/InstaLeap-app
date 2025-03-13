import axios from "axios";
import { CreateUserRequest } from "../../core/user/CreateUserRequest";
import { CreateUserResponse } from "../../core/user/CreateUserResponse";

const API_URL = "https://reqres.in/api/users";
/**
 * Crea un nuevo usuario en la API de ReqRes.
 *
 * @param userData - Objeto con el nombre y trabajo del usuario a crear.
 * @returns Un objeto con los datos del usuario creado, incluyendo su ID, o `null` si ocurre un error.
 */
export const createUser = async (userData: CreateUserRequest): Promise<CreateUserResponse | null> => {
    try {
      const response = await axios.post<CreateUserResponse>(API_URL, userData);
      return  await response.data;
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      return null;
    }
  };