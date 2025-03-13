import { useState } from "react";
import useFetchUser from "../../../hooks/useFetchUser";
import "./getuserpage.css"; // Importamos estilos locales

const GetUserPage = () => {
  const [userId, setUserId] = useState<string>("");
  const { user, loading, error, fetchUser } = useFetchUser();

  const handleFetchUser = () => {
    if (!userId.trim()) return; // Evitar búsquedas vacías
    fetchUser(Number(userId));
  };

  return (
    <div className="get-user-container">
      <h2>Buscar Usuario por ID</h2>
      <div className="input-container">
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Ingresa el ID"
        />
        <button onClick={handleFetchUser} disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-card">
          <img src={user.avatar} alt={user.first_name} className="user-avatar" />
          <h3>{user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default GetUserPage;
