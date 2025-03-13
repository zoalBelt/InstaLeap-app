import { useState } from "react";
import { createUser } from "../../../services/userservices/UserServicePostNewUser";
import "./createuserpage.css"; // Importamos estilos locales

const CreateUserPage = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [avatar, setAvatar] = useState(""); // Nueva URL de imagen
  const [createdUser, setCreatedUser] = useState<{ id: string; name: string; job: string; avatar: string } | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !job || !avatar) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    const newUser = { name, job };
    const response = await createUser(newUser);

    if (response) {
      setMessage(`Usuario creado exitosamente.`);
      setCreatedUser({
        id: response.id,
        name: response.name,
        job: response.job,
        avatar: avatar, // Guardamos la URL ingresada
      });

      // Limpiar los campos
      setName("");
      setJob("");
      setAvatar("");
    } else {
      setMessage("Error al crear el usuario.");
    }
  };

  return (
    <div className="create-user-container">
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Trabajo:
          <input type="text" value={job} onChange={(e) => setJob(e.target.value)} required />
        </label>
        <br />
        <label>
          URL de Imagen:
          <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Crear Usuario</button>
      </form>

      {message && <p className="message">{message}</p>}

      {createdUser && (
        <div className="user-card">
          <img src={createdUser.avatar} alt={createdUser.name} className="user-avatar" />
          <h3>{createdUser.name}</h3>
          <p>{createdUser.job}</p>
        </div>
      )}
    </div>
  );
};

export default CreateUserPage;
