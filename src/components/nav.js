import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { MagnifyingGlassIcon, PlusSmallIcon, FunnelIcon, AdjustmentsHorizontalIcon, BarsArrowDownIcon,  HomeIcon} from '@heroicons/react/24/solid'
import ReactShortcut from 'react-shortcut';
import {useRef} from  'react';
import CreateTaskModal from './CreateTaskModal';

function Nav(){
    const inputRef = useRef(null);

    const {showModal, setShowModal} = useContext(GlobalContext)
    return(
        <>
            <ReactShortcut keys={['command+k', 'ctrl+k']} onKeysPressed={() => {inputRef.current.focus()}}/>
            <div className="rounded-xl mainTopSection bg-indigo-500 flex justify-start items-center p-2">

                <button className='w-10 p-2 text-white hover:bg-indigo-600 transition rounded-md'>
                    <HomeIcon></HomeIcon>
                </button>

                <div className='relative mr-auto ml-2'>
                    <MagnifyingGlassIcon className='w-5 absolute top-1/2 left-2 text-indigo-200' style={{transform: 'translateY(-50%)'}}></MagnifyingGlassIcon>
                    <input ref={inputRef} className='rounded-md pl-8 pr-3 py-2 text-sm bg-[#866BFF] placeholder:text-indigo-200 focus:ring-2 ring-indigo-300 outline-none' type="search" placeholder='Search                  ⌘+K' />
                </div>


                <div className='flex justify-evenly items-center space-x-2'>
                    <button onClick={() => setShowModal(true)} className='bg-white py-2 px-4 rounded-md flex justify-center items-center text-indigo-500 transition ease-in-out focus:ring-2 ring-indigo-300 transform  active:scale-95'>
                        <PlusSmallIcon className='w-5'></PlusSmallIcon> 
                        Create Task
                    </button>

                    <button className="filter flex justify-center items-center rounded-md p-3 text-sm text-white hover:bg-indigo-600 transition">
                        <FunnelIcon className='w-5 mr-1'></FunnelIcon> 
                        Filter
                    </button>

                    <button className="sort flex justify-center items-center rounded-md p-3 text-sm text-white hover:bg-indigo-600 transition">
                        <BarsArrowDownIcon className='w-5 mr-1'></BarsArrowDownIcon> 
                        Sort
                    </button>
                    
                    <button className="view flex justify-center items-center rounded-md p-3 text-sm text-white hover:bg-indigo-600 transition">
                        <AdjustmentsHorizontalIcon className='w-5 mr-1'></AdjustmentsHorizontalIcon> 
                        View
                    </button>
                </div>
            </div>
                
            {showModal ? (
                <>
                    <CreateTaskModal showModal={showModal} setShowModal={setShowModal}></CreateTaskModal>
                </>
                ) : null}

        </>

    )
}
export default Nav;