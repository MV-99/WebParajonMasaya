import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from "./pages/Salir";
import Cotizar from "./pages/Cotizar";
import Ayuda2 from "./pages/Ayuda2";
import Catalogo from "./pages/Catalogo";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Logout />} />
          <Route path="/cotizacion" element={<Cotizar />} />
          <Route path="/ayuda2" element={<Ayuda2 />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
    </Router>
  );
}

export default App;
