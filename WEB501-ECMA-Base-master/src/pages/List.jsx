import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function List() {
  const [tours, setTour] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/tours")
      .then((response) => {
        setTour(response.data.tours || response.data);
      })
      .catch((error) => {
        console.error("Lỗi lấy dữ liệu", error);
      });
  }, []);

  const deleteTour = async (id) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (!confirm) return;
    try {
      await axios.delete(`http://localhost:3001/tours/${id}`);
      setTour(tours.filter(tour => tour.id !== id));
      toast.success("Xóa thành công!");
    } catch (error) {
      toast.error("Lỗi xóa tour", error);
    }
  }

  const Change = async (tourId, Available) => {
    const newAvailable = Available === 0 ? 1 : 0;

    setTour(prevTours => 
      prevTours.map(tour => 
        tour.id === tourId ? { ...tour, available: newAvailable } : tour
      )
    );

    try {
      await axios.patch(`http://localhost:3001/tours/${tourId}`, { available: newAvailable });
      toast.success(`Cập nhật trạng thái tour thành công!`);
    } catch (error) {
      toast.error("Lỗi cập nhật trạng thái!");
      console.error('Lỗi khi cập nhật trạng thái:', error);
      
      setTour(prevTours => 
        prevTours.map(tour => 
          tour.id === tourId ? { ...tour, available: currentAvailable } : tour
        )
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-[80%] border border-gray-300 rounded-lg mx-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className=" p-4  text-center border-gray-300">#</th>
              <th className=" p-4  text-center">
                Tỉnh
              </th>
              <th className=" p-4  text-center border-gray-300">
                Tour
              </th>
              <th className=" p-4  text-center border-gray-300">
                Thời gian
              </th>
              <th className=" p-4  text-center border-gray-300">
                Giá
              </th>
              <th className=" p-4  text-center border-gray-300">
                Tình trạng
              </th>
              <th className=" p-4  text-center border-gray-300">
                Ảnh
              </th>
              <th className=" p-4  text-center border-gray-300">
                Hành động
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
                
                
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <label className="switch w-full flex justify-center ">
                    <input className="w-[30px] h-[30px]"
                      type="checkbox" 
                      checked={tour.available === 1} 
                      onChange={() => Change(tour.id, tour.available)} 
                    />
                    <span className="slider round"></span>
                  </label>
                  <span >
                    {tour.available === 1 ? "Còn chỗ" : "Hết chỗ"}
                  </span>
                </td>
                
                <td className="px-4 py-2 border border-gray-300">
                  <img src={tour.image} alt={tour.name} className="w-20 h-16 object-cover rounded" />
                </td>
                <td className="px-4 py-6  border border-gray-300 flex justify-center items-center">
                  <Link
                    to={`/edit/${tour.id}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2"
                  >
                    Sửa
                  </Link>
                  <button
                    onClick={() => deleteTour(tour.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
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