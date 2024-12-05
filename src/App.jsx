import { BrowserRouter, Route, Routes } from "react-router-dom";
import CanceledPage from "./pages/CanceledPage";
import CompletedPage from "./pages/CompletedPage";
import CreatePage from "./pages/CreatePage";
import DashboardPage from "./pages/DashboardPage";
import NewPage from "./pages/NewPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import ProgressPage from "./pages/ProgressPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/Create" element={<CreatePage />} />
        <Route exact path="/All" element={<NewPage />} />
        <Route exact path="/Progress" element={<ProgressPage />} />
        <Route exact path="/Completed" element={<CompletedPage />} />
        <Route exact path="/Canceled" element={<CanceledPage />} />
        <Route exact path="/Profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
