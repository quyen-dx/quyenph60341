import { Toaster } from "react-hot-toast";
import {  Routes, Route, Link } from "react-router-dom";
import List from "./pages/List.jsx";
import Edit from "./pages/Edit.jsx";
import Add from "./pages/Add.jsx";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/add">Thêm mới</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login">Đăng nhập</Link>
            <Link to="/register">Đăng ký</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
