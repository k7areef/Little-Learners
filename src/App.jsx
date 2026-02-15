// React Router DOM:
import { Route, Routes } from "react-router-dom";
// Pages:
import HomePage from "@pages/HomePage";
import AboutPage from "@pages/AboutPage";
import AcademicsPage from "@pages/AcademicsPage";
import AdmissionsPage from "@pages/AdmissionsPage";
import ContactPage from "@pages/ContactPage";
import StudentLifePage from "@pages/StudentLifePage";
// Common Components:
import Footer from "@components/Layout/Footer";
import NavigraitonBar from "@components/Layout/NavigationBar";

function App() {
  return (
    <div className="App min-h-screen bg-orange-97">
      {/* Navigation Bar */}
      <NavigraitonBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/student-life" element={<StudentLifePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;