import { useEffect, useState } from "react";
import { getUsers } from "../../../services/userservices/UserServiceGet";
import { User } from "../../../core/user/User";
import "./usersview.css"; // Importamos los estilos

const UsersView = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError("Error al cargar los usuarios");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="loading">Cargando usuarios...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="users-container">
      <h2>Lista de Usuarios</h2>
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} className="user-avatar" />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersView;
