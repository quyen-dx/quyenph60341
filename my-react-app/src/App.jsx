import Header from "./cpn/Header.jsx";
import Footer from "./cpn/Footer.jsx";
import TourCard from "./cpn/TourCard.jsx";
import Title from "./cpn/Title.jsx";
function App() {
  // mock data
  const tours = [
    {
      id: 1,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 2,
      title: 'Tour Du Lịch Hoa Ky',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 3,
      title: 'Tour Du Lịch Nhat Ban Update',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Nhat Ban Update',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
  ]
  return (
    <div className="">
      <Header/>
      <Title title="TOUR nội địa"></Title>
      <p className="text-xl font-medium my-2 px-2 text-center p-3 text-size-[120%]">
        Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biêt, luôn sẵn
        sàng tạo ra những trải nghiệm độc đáo và không quên cho du khách, giúp
        mang đến những chuyến hành trình tuyệt vời.
      </p>
      <div className="w-[80%] mx-auto">
        <div className="flex gap-2 justify-evenly">
        {tours.map(tour => (
          <div>
            <TourCard key={tour.id} title={tour.title} image={tour.image}/>
          </div>
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default App