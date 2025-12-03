// src/components/Register.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    try {
      const res = await axios.get(`http://localhost:3001/users?email=${email}`);
      if (res.data.length > 0) {
        toast.error("Email đã tồn tại!");
        return;
      }
      await axios.post("http://localhost:3001/users", {
        username,
        email,
        password, 
      });
      toast.success("Đăng ký thành công!");
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Đăng ký thất bại!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Đăng ký</h2>
        <input
          type="text"
          placeholder="Tên người dùng"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-3 rounded-md focus:outline-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-md focus:outline-blue-500"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-md focus:outline-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          Đăng ký
        </button>
        <Link to="/Login"> Đăng nhập</Link>
      </form> 
    </div>
  );
}