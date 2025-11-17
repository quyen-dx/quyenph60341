export default function Button(props){
    return (
        <div className="flex w-full justify-evenly">
            <button className="mt-3 w-[45%] bg-blue-600 text-white py-2 rounded-lg
             hover:bg-blue-900 cursor-pointer" 
            onClick={() => alert(`Đây là: ${props.title}`)}>
            Xem Chi Tiết</button>
            <button className="mt-3 w-[45%] bg-red-600 text-white py-2 rounded-lg hover:bg-red-900 cursor-pointer" 
            onClick={() => confirm(`Xóa: ${props.title}`)}>
            Xóa</button>
        </div>
    )
}