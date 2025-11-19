export default function Title(props) {
    return (
        <div className="w-full  p-5 text-center">
            <h1 className="text-red-600 font-bold text-[300%] text-center border-b-2 border-red-600 inline-block">{props.title}</h1>
        </div>
    )
}