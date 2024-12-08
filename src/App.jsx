import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullScreenLoader from "./components/masterLayout/FullScreenLoader.jsx";
import CanceledPage from "./pages/CanceledPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import NewPage from "./pages/NewPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route exact path="/Create" element={<CreatePage />} />
          <Route exact path="/All" element={<NewPage />} />
          <Route exact path="/Progress" element={<ProgressPage />} />
          <Route exact path="/Completed" element={<CompletedPage />} />
          <Route exact path="/Canceled" element={<CanceledPage />} />
          <Route exact path="/Profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader />
    </>
  );
};

export default App;
