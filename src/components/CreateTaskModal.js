import { XMarkIcon, CalendarDaysIcon, InboxIcon, TagIcon} from '@heroicons/react/24/solid'


function CreateTaskModal({setShowModal}){

    return(
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/2 my-6 mx-auto max-w-8xl">
                {/*content*/}
                    <div className="space-y-2 p-5 border-0 rounded-lg shadow-lg relative flex flex-col justify-start items-center w-full bg-white outline-none focus:outline-none">
                        {/*body*/}

                        <button className='absolute right-2 top-2' onClick={() => setShowModal(false)}>
                            <XMarkIcon className='w-6'></XMarkIcon>
                        </button>

                        <form className="relative flex-auto flex justify-start items-start flex-col w-full" >
                            <input className='focus:ring-0 focus:outline-none p-3 w-full rounded font-bold placeholder:text-gray-500 text-gray-600' style={{fontSize: "30px"}} type="text" placeholder='Text Name' />

                            <input className='focus:ring-0 focus:outline-none rounded pt-1 p-3 w-full' type="text" placeholder='Descripton' />
                        </form>
                        <div className="flex justify-between items-center w-full pt-2 pb-4">
                            <div className=' w-full  flex items-center'>
                                <button className='border flex p-2 rounded-md items-center mr-2 text-xs text-gray-500 transition ease-in-out focus:ring-2 ring-indigo-300 transform  active:scale-95'> <CalendarDaysIcon className='w-4 mr-1'></CalendarDaysIcon> Due Date</button>
                                <button className='border flex p-2 rounded-md items-center text-xs text-gray-500 transition ease-in-out focus:ring-2 ring-indigo-300 transform  active:scale-95'> <InboxIcon className='w-4 mr-1 text-blue-400'></InboxIcon> Inbox</button>
                                <button className='p-2 rounded-md ml-auto text-xs text-gray-500 transition ease-in-out focus:ring-2 ring-indigo-300 transform  active:scale-95'> <TagIcon className='w-5'></TagIcon> </button>
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b w-full py-2">
                            <button
                                className="text-gray-500 bg-gray-200 rounded font-bold  px-4 py-2 text-xs outline-none focus:outline-none mr-3 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-indigo-500 text-white active:bg-indigo-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Add task
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default CreateTaskModal;