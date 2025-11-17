export default function Title(props){
    return(
        <div className="w-full text-center p-5 shadow-lg">
            <h1 className="text-red-600 font-bold text-[300%]">{props.title}</h1>
        </div>
    )
}