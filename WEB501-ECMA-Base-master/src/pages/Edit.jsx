import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState({
    name: "",
    destination: "",
    duration: "",
    price: 0,
    available: 0,
    image: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/tours/${id}`)
      .then(res => setTour(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTour(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/tours/${id}`, tour);
      toast.success("Cập nhật thành công!");
      navigate("/list");
    } catch (err) {
      console.error(err);
      toast.error("Cập nhật thất bại!");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sửa Tour</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Tỉnh:</label>
          <input name="name" value={tour.name} onChange={handleChange} className="border px-2 py-1 w-full"/>
        </div>
        <div>
          <label className="block">Tour:</label>
          <input name="destination" value={tour.destination} onChange={handleChange} className="border px-2 py-1 w-full"/>
        </div>
        <div>
          <label className="block">Thời gian:</label>
          <input name="duration" value={tour.duration} onChange={handleChange} className="border px-2 py-1 w-full"/>
        </div>
        <div>
          <label className="block">Giá:</label>
          <input type="number" name="price" value={tour.price} onChange={handleChange} className="border px-2 py-1 w-full"/>
        </div>
        <div>
          <label className="block">Số lượng còn lại:</label>
          <input type="number" name="available" value={tour.available} onChange={handleChange} className="border px-2 py-1 w-full"/>
        </div>
        <div>
          <label className="block">Ảnh URL:</label>
          <input name="image" value={tour.image} onChange={handleChange} className="border px-2 py-1 w-full"/>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Lưu
        </button>
      </form>
    </div>
  );
}
