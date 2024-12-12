// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import FullScreenLoader from "./components/masterLayout/FullScreenLoader.jsx";
// import CanceledPage from "./pages/CanceledPage.jsx";
// import CompletedPage from "./pages/CompletedPage.jsx";
// import CreatePage from "./pages/CreatePage.jsx";
// import DashboardPage from "./pages/DashboardPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import NewPage from "./pages/NewPage.jsx";
// import NotFoundPage from "./pages/NotFoundPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";
// import ProgressPage from "./pages/ProgressPage.jsx";

import "react-toastify/dist/ReactToastify.css";
import CanceledPage from "./pages/CanceledPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NewPage from "./pages/NewPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/FullScreenLoader.jsx";
import { getToken } from "./helper/SessionHelper";
import RegistrationPage from "./pages/RegistrationPage.jsx";

// import RegistrationPage from "./pages/RegistrationPage.jsx";
const App = () => {
  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<DashboardPage />} />
  //         <Route exact path="/Create" element={<CreatePage />} />
  //         <Route exact path="/All" element={<NewPage />} />
  //         <Route exact path="/Progress" element={<ProgressPage />} />
  //         <Route exact path="/Completed" element={<CompletedPage />} />
  //         <Route exact path="/Canceled" element={<CanceledPage />} />
  //         <Route exact path="/Profile" element={<ProfilePage />} />
  //         <Route exact path="/login" element={<LoginPage />} />
  //         <Route exact path="/Registration" element={<RegistrationPage />} />
  //         <Route path="*" element={<NotFoundPage />} />
  //       </Routes>
  //     </BrowserRouter>
  //     <FullScreenLoader />
  //   </>
  // );
  if (getToken) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/Create" element={<CreatePage />} />
            <Route exact path="/All" element={<NewPage />} />
            <Route exact path="/Progress" element={<ProgressPage />} />
            <Route exact path="/Completed" element={<CompletedPage />} />
            <Route exact path="/Canceled" element={<CanceledPage />} />
            <Route exact path="/Profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
            {/* <Route exact path="/SendOTP" element={<SendOTPPage />} />
            <Route exact path="/VerifyOTP" element={<VerifyOTPPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </>
    );
  }
};

export default App;
