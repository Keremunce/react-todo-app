import Checkbox from "./checkbox";

function TodoElement(props) {

    return(
        <div className="bg-white p-3 rounded-xl relative z-10">
            <div className="flex justify-start items-center gap-5">
                <Checkbox todo={props.todo}></Checkbox>

                <div className="flex flex-col col-span-5 ">
                    <p>{props.title}</p>
                    <p className="text-sm text-gray-400">{props.date}</p>
                    <p className="text-sm text-gray-400">{props.status}</p>
                </div>
                <span className={`absolute w-2 h-full right-0  rounded-br-xl rounded-tr-xl ${props.categoryColor} `} style={{ zIndex: "-1"}}></span>
            </div>
        </div>
    )
}

export default TodoElement; 