
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
    // HEADER CHÍNH: Màu nền trắng, đường viền dưới tinh tế, luôn dính ở trên cùng
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* CỘT 1: Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#" 
            // Màu Logo: Xanh lam (Blue-600) là màu chủ đạo, font đậm, kích thước lớn
            className="text-2xl font-bold text-blue-600 tracking-tight transition duration-150 hover:text-blue-800"
          >
            VTours
          </a>
        </div>

        {/* CỘT 2: Menu và CTA Button (Bố cục ngang) */}
        <div className="flex items-center space-x-8"> 
            
            {/* Nav Links */}
            <nav className="flex space-x-6 items-center">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  // Màu Menu: Xám trung tính (Gray-600), hover chuyển sang Xanh lam (Blue-600)
                  className="text-gray-600 hover:text-blue-600 font-medium text-base transition duration-150 py-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button (Call-to-Action) */}
            <a 
                href="#"
                // Màu Button: Xanh lam đậm (Blue-600), chữ trắng, hình dạng bo tròn (rounded-full)
                // Hiệu ứng: Bóng (shadow-md) và chuyển động nhỏ khi hover (transform hover:scale-105)
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Đặt Tour Ngay
            </a>
        </div>

      </div>
    </header>
  );
};

export default Header;