import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-hot-toast";

function Add() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("1"); 
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTour = {
      name,
      destination,
      duration,
      price: Number(price),
      available: Number(available), 
      image,
    };

    try {
      await axios.post("http://localhost:3001/tours", newTour);
      toast.success("Thêm tour thành công!");

      setName("");
      setDestination("");
      setDuration("");
      setPrice("");
      setAvailable("1");
      setImage("");

      navigate("/list");
    } catch (err) {
      console.error("Lỗi thêm tour:", err);
      toast.error("Thêm tour thất bại!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm tour mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <div>
          <label className="block font-medium mb-1">Tên tour</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Địa điểm</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Thời gian</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Giá (VNĐ)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Tình trạng</label>
          <select
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Còn chỗ</option>
            <option value="0">Hết chỗ</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">URL ảnh</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Thêm tour
        </button>
      </form>
    </div>
  );
}

export default Add;
