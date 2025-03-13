import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./ui/components/navbar/NavBar";
import UsersView from "./ui/pages/userview/usersview";
import GetUserPage from "./ui/pages/singleuserview/getuserpage";
import CreateUserPage from "./ui/pages/createuserview/createuserpage";
import "./App.css";

/**
 * Componente principal de la aplicación que gestiona las rutas y la navegación.
 *
 * @returns El árbol de componentes de la aplicación con la barra de navegación y las rutas.
 */
function App() {
  return (
    <Router> 
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<UsersView />} />
          <Route path="/get-user" element={<GetUserPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
