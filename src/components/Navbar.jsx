// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">🎓 CampusAid</div>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Register</Link>
      </div>
    </nav>
  );
}
