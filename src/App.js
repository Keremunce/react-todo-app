import { useContext, useRef } from 'react';
import { GlobalContext } from './Context/GlobalState';
import TodoElement from './components/todoElement';
import { ArrowDownIcon} from '@heroicons/react/24/solid'
import ReactShortcut from 'react-shortcut';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const inputRef = useRef(null);

  const {tasks, setTasks,taskName, settaskName, taskStatus  } = useContext(GlobalContext)

  const  createTask = e => {
    e.preventDefault();
    if(taskName === ""){
      return
    }
    setTasks([...tasks, {id: uuidv4(), title: taskName, done: taskStatus}]);
    settaskName("");
  }

  return (
    <div className='bg-sky-100 h-screen'>
      <div className='grid grid-cols-12 p-2'>

        <div className='w-full col-span-12'>
          <ReactShortcut keys={['command+k', 'ctrl+k']} onKeysPressed={() => {inputRef.current.focus()}}/>
          <div className="rounded-xl mainTopSection bg-indigo-500 flex justify-start items-center p-2 w-full">
            <form onSubmit={createTask} className='relative mx-auto w-1/2'>
                <input className='w-full text-white rounded-md px-3 py-2 text-sm bg-[#866BFF] placeholder:text-indigo-200 focus:ring-2 ring-indigo-300 outline-none' type="text" placeholder='Enter Task       ⌘+K'
                    ref={inputRef}
                    value={taskName}
                    onChange={(e) => settaskName(e.target.value)}
                    />
                <button type='submit' className='bg-sky-50 rounded absolute top-1/2 right-2 border-red-500 p-1 active:scale-95' style={{transform: 'translateY(-50%)'}}>
                    <ArrowDownIcon className='w-4 text-xl font-bolder  text-indigo-500'></ArrowDownIcon>
                </button>
            </form>
          </div>


          <div className="container mx-auto p-2 w-1/2 space-y-2">
            {
              tasks.map(task => (
                <TodoElement key={task.id} task={task} ></TodoElement>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;