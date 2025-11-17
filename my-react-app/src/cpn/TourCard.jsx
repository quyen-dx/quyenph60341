import Button from "./Button";

export default function TourCard(props) {
    return (
        <div className="bg-gray-100 p-5 rounded-2xl transform transition-transform duration-200 hover:-translate-y-2">
            <img src={props.image} alt="" className="border-2 rounded-[5%] w-[300px] h-[350px]" />
            <h2 className="text-[120%] font-bold text-purple-700">{props.title}</h2>
            <Button title={props.title} />
        </div>
    )
}