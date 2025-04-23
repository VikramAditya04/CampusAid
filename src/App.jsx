// // src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<div className="text-center p-10 text-2xl">Login Page</div>} />
//         <Route path="/register" element={<div className="text-center p-10 text-2xl">Register Page</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudyHelp from "./pages/Features/StudyHelp";
import Marketplace from "./pages/features/Marketplace";
import ClubsEvents from "./pages/features/ClubsEvents";
import RoommateFinder from "./pages/features/RoommateFinder";
import LostFound from "./pages/features/LostFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<div className="text-center p-10 text-2xl">Login Page</div>} />
        <Route path="/register" element={<div className="text-center p-10 text-2xl">Register Page</div>} />

        {/* Feature Routes */}
        <Route path="/study-help" element={<StudyHelp />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/clubs-events" element={<ClubsEvents />} />
        <Route path="/roommate-finder" element={<RoommateFinder />} />
        <Route path="/lost-found" element={<LostFound />} />
      </Routes>
    </BrowserRouter>
  );
}
