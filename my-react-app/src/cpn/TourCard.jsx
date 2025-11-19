import Button from "./Button";

export default function TourCard(props) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 
                        hover:shadow-xl hover:-translate-y-2 
                        transition-all duration-300 grid gap-3">
            <div className="w-full h-[240px] overflow-hidden rounded-xl">
                <img src={props.image} alt="" className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-120"
                />
            </div>
            <h2 className="text-lg font-bold text-gray-800">{props.title}</h2>

            <div className="mt-2">
                <Button title={props.title} />
            </div>
        </div>
    );
}
