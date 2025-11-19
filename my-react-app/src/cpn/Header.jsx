
const Header = () => {
  // Danh sách menu
  const menuItems = [
    { name: 'Trang Chủ', href: '#' },
    { name: 'Tour Nội Địa', href: '#' },
    { name: 'Tour Quốc Tế', href: '#' },
    { name: 'Khách Sạn', href: '#' },
    { name: 'Liên Hệ', href: '#' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-2xl font-bold text-blue-600  transition duration-150 hover:text-blue-800"
          >
            VTours
          </a>
        </div>
        <div className="flex items-center space-x-8">

          <nav className="flex space-x-6 items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium  transition duration-150 py-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href="#"

            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm transform hover:scale-105 focus:outline-none "
          >
            Đặt Tour Ngay
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;