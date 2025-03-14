Este es el prompt utilizado paa la creación del hook personalizado

# 🛠️ Hook Personalizado: `useFetchUser`
---

## 🎯 **Prompt**
Ayudame a crear un hook personalizad, el hook debe encapsular la siguiente lógica y permitir su reutilización en cualquier componente:

```tsx
import { useState } from "react";
import { getUserById } from "../../../infrastructure/userservices/UserServiceGetSingleUserById";
import { User } from "../../../core/user/User";
import "./GetUserPage.css"; // Importamos estilos locales

const GetUserPage = () => {
  const [userId, setUserId] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    if (!userId.trim()) {
      setError("Por favor ingresa un ID válido.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await getUserById(Number(userId));
      if (data) {
        setUser(data);
      } else {
        setUser(null);
        setError("Usuario no encontrado.");
      }
    } catch (err) {
      setError("Hubo un error al obtener el usuario.");
    } finally {
      setLoading(false);
    }
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
        <button onClick={fetchUser} disabled={loading}>
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
