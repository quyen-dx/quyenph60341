// src/App.jsx
import { Toaster } from "react-hot-toast";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useAuth } from "./pages/AuthContext.jsx";
import { toast } from "react-hot-toast";
import List from "./pages/List.jsx";
import Edit from "./pages/Edit.jsx";
import Add from "./pages/Add.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";


const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    toast.error("Vui lòng đăng nhập để truy cập.");
    navigate("/login");
    return null;
  }

  return children;
};

function App() {
  const { isLoggedIn, username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Đăng xuất thành công!");
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between ">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-bold hover:text-gray-400">Trang chủ</Link>
            <Link to="/list" className="font-bold hover:text-gray-400">Danh sách</Link>
            <Link to="/add" className="font-bold hover:text-gray-400">Thêm mới</Link>


          </div>

          <div className="hidden md:flex items-center space-x-6">
            {!isLoggedIn ? (
              <>
                <Link to="/Login" className="font-bold hover:text-gray-400">Đăng nhập</Link>
                <Link to="/Register" className="font-bold hover:text-gray-400">Đăng ký</Link>
              </>
            ) : (

              <>
                <span className="font-bold">Xin chào, {username}!</span>
                <button
                  onClick={handleLogout}
                  className="font-bold hover:text-gray-400 bg-red-950 p-1 rounded-2xl"
                >
                  Đăng xuất
                </button>
              </>
            )}
          </div>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ProtectedRoute><List /></ProtectedRoute>} />
        <Route path="/edit/:id" element={<ProtectedRoute><Edit /></ProtectedRoute>} />
        <Route path="/add" element={<ProtectedRoute><Add /></ProtectedRoute>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;