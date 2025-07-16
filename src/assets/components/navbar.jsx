import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link to="/">Blogify</Link>
      <div className="space-x-4">
        <Link to="/new">New Post</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
