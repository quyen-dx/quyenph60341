import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/tours")
      .then((res) => setTours(res.data))
      .catch((err) => console.error("Lỗi lấy dữ liệu:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Danh sách Tour</h1>
       <div className="w-full h-[400px] overflow-hidden mb-[50px] rounded-lg">
            <img src="https://picsum.photos/400/300?random=100" alt="" srcset="" className="w-full object-cover"/>
        </div> 
      <div className="flex flex-wrap justify-evenly">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-gray-200 rounded-lg p-10"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{tour.name}</h2>
              <p className="text-gray-600 mb-1">Điểm đến: {tour.destination}</p>
              <p className="text-gray-600 mb-1">Thời gian: {tour.duration}</p>
              <p className="text-gray-800 font-bold mb-1">
                Giá: {tour.price.toLocaleString()}đ
              </p>
              <p className="text-gray-600">Tình trạng: {tour.available === 1 ? "Còn chỗ" : "Hết chỗ"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
