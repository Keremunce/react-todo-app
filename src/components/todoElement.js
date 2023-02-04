import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"

function TodoElement(props) {
    const {tasks, setTasks } = useContext(GlobalContext)

    const todoClick = (e, id) => {
        e.preventDefault();
        let task = tasks.find(x => x.id === id);
        let index = tasks.findIndex(x => x.id === id);
        task.done = !task.done;
        tasks.splice(index,1);
        setTasks([...tasks, task]);
    }

    return( 
        <div key={props.task.id}  onClick={(e) => todoClick(e, props.task.id)} 
        className="bg-white p-3 rounded-xl relative z-10">
            <div className="flex justify-start items-center gap-5">
                <div className='flex flex-col justify-center items-center'>
                    <label htmlFor="check-box-1" className='cursor-pointer relative'>
                        <input type="checkbox" id='check-box-1' 
                        checked={props.task.done}
                        className='appearance-none h-8 w-8 border-2 rounded-lg border-plastic-pink checked:bg-plastic-pink checked:border-plactic-pink transition' />

                        <FontAwesomeIcon icon={faCheck} className="text-8xl h-1/2 w-1/2 text-white absolute text-opacity-0 check-1 transition" 
                        style={{top: "50%", left: "50%", transform: "translate(-50%, -60%)"}}></FontAwesomeIcon>
                    </label>
                </div>

                <div className="flex flex-col col-span-5 ">
                    <p>{props.task.title}</p>
                    <p>{props.task.done}</p>   
                </div>
            </div>
        </div>
    )
}

export default TodoElement; 