import { useEffect, useState } from "react";
import axios from "axios";
function List() {
  const [tours, setTour] = useState([]);
  
  useEffect(() => {
    axios
    .get("http://localhost:3000/tours")
    .then((response) => {
      setTour(response.data);
    })
    .catch((error) => {
      console.error("Lỗi lấy dữ liệu", error);
    });
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Tỉnh
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Tour
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Thời gian
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Giá
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Số lượng còn lại
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Ảnh
              </th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour, index) => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.name}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.destination}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.duration}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.price.toLocaleString()}đ</td>
                <td className="px-4 py-2 border border-gray-300">{tour.available}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <img src={tour.image} alt={tour.name} className="w-20 h-16 object-cover rounded" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
