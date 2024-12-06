import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
