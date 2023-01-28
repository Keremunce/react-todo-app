import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



function Checkbox({todo}){
    function SetStatus() {
        console.log(todo);
        todo.status = !todo.status;
    }
    return(
        <div className='flex flex-col justify-center items-center'
        onClick={SetStatus}  >
            <label htmlFor="check-box-1" className='cursor-pointer relative'>
                <input type="checkbox" id='check-box-1' className='appearance-none h-8 w-8 border-2 rounded-lg border-plastic-pink checked:bg-plastic-pink checked:border-plactic-pink transition' />

                <FontAwesomeIcon icon={faCheck} className="text-8xl h-1/2 w-1/2 text-white absolute text-opacity-0 check-1 transition" style={{top: "50%", left: "50%", transform: "translate(-50%, -60%)"}}></FontAwesomeIcon>
            </label>
        </div>
    )
}

export default Checkbox;    
