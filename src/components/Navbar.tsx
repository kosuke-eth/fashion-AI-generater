import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // For now, just redirect to home page
    navigate("/");
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          LamuseAI
        </Link>
        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Create
          </Link>
          <Link
            to="/mypage"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            My Designs
          </Link>
          <Link
            to="/shops"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Shops
          </Link>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};
