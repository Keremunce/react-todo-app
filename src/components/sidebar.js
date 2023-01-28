import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

import { PlusSmallIcon, InboxIcon, CalendarIcon, CalendarDaysIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import CreateList from './CreateList';
import { GlobalContext } from '../Context/GlobalState';

function Sidebar() {
    const {formOpen, setFormOpen, projects, setProjects} = useContext(GlobalContext)


    return ( 
        <aside className="bg-white h-full col-span-2 rounded-xl shadow-md  p-2 flex flex-col rounded-br-3xl rounded-bl-3xl">
            <div className='hidden bg-rose-400 bg-fuchsia-400 bg-orange-400 bg-indigo-400 bg-emerald-400 bg-cyan-400'></div>
            <div className="prose lg:prose-md text-center">
                <h2 className="text-indigo-500 italic">Proceede Todo</h2>
            </div>

            <div className="prose lg:prose-md text-left flex flex-col justify-start items-strect space-y-1 mt-3">
                
                <NavLink to="inbox" className='text-left no-underline flex justify-start items-center hover:bg-gray-100 p-2 rounded-md transition text-sm antialiased hover:subpixel-antialiased'><InboxIcon className='w-4 mr-2 text-blue-700'></InboxIcon> Inbox</NavLink>
                <NavLink to="today" className='text-left no-underline flex justify-start items-center hover:bg-gray-100 p-2 rounded-md transition text-sm antialiased hover:subpixel-antialiased'><CalendarIcon className='w-4 mr-2 text-gray-500'></CalendarIcon> Today</NavLink>
                <NavLink to="upcoming" className='text-left no-underline flex justify-start items-center hover:bg-gray-100 p-2 rounded-md transition text-sm antialiased hover:subpixel-antialiased'><CalendarDaysIcon className='w-4 mr-2 text-gray-500'></CalendarDaysIcon> Upcoming</NavLink>
            </div>

            <div className="flex justify-between items-center rounded-md p-1 mb-1">
                <p className="text-slate-500 font-bold text-sm my-0 ">Projects </p>

                <button onClick={() => setFormOpen(true)}  className="rounded-md flex justify-center items-center text-indigo-500 hover:text-white active:text-white font-bold hover:bg-indigo-400 ease-in-out focus:ring-2 ring-indigo-300 transform active:scale-95 transition-transform text-xs">
                    <PlusSmallIcon className='w-6'></PlusSmallIcon>
                </button>
            </div>
            <div className="overflow-auto mt-0 h-full">
                <div className="prose lg:prose-md text-left flex flex-col justify-evenly items-strech space-y-1">
                    {formOpen ? (
                        <>
                            <CreateList projects={projects} setProjects={setProjects} formOpen={formOpen} setFormOpen={setFormOpen}></CreateList>
                        </>)
                    : null}

                    <ul className='p-0'>
                        {projects.map((project) =>
                            <li key={project.id} className="className='text-left flex items-center hover:bg-gray-50 transition rounded-md text-sm">
                                <span className={`w-2 h-2 mr-2 aspect-square rounded-full ${project.color} `}></span>
                                {project.name}
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <hr className='mt-auto mb-2 border-gray-200'/>

            <div className="prose lg:prose-md text-left flex flex-col justify-evenly items-strech text-sm">
                <div className='flex w-full justify-evenly items-center'>
                    <img className='rounded-full aspect-square w-10 object-cover' src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" alt="User Profile" />
                    <div className='flex flex-col justify-center items-start'>
                        <p className='my-0'>Kerem Unce</p>
                        <p className='text-xs text-gray-400 my-0'>Keremunce@hotmail.com</p>
                    </div>
                </div>

                <button className='text-center flex justify-center items-center p-2 bg-gray-200 hover:bg-gray-300 transition rounded-md rounded-br-3xl rounded-bl-3xl'><ArrowLeftOnRectangleIcon className='w-5 mr-2'></ArrowLeftOnRectangleIcon> Log out</button>
            </div>
        </aside>
    )
    }
export default Sidebar; 