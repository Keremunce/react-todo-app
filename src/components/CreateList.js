import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { v4 as uuidv4 } from 'uuid';
import projectList from './utils/projects.json'

function CreateList({setFormOpen,setProjects,projects}) {

    const {pickerOpen, setPickerOpen,projectName, setProjectName,pickedColor, setpickedColor} = useContext(GlobalContext)

    const submitHandle = e => {
        e.preventDefault();
        const proje = {
            "name": projectName,
            "id": uuidv4(),
            "color": projectList.pickColors[pickedColor],
            "tasks": []
        }
        setProjects([...projects, proje]);
        setProjectName("");
    }
    
    return(
        <>
            <div className="relative">
                {pickerOpen ? (
                    <>
                        <div className="absolute flex flex-wrap top-full bg-gray-100 rounded-sm shadow-sm p-2 space-x-2">
                            {projectList.pickColors.map((color, index) => (
                                <button key={index} onClick={() => {setpickedColor(index); setPickerOpen()}} className={`rounded-full w-3 h-3 ${color}`}></button>
                            ))}
                        </div>
                    </>
                ) : null}

                <button onClick={() => setPickerOpen(!pickerOpen)} className={`absolute w-3 h-3 rounded-full ${projectList.pickColors[pickedColor]}`} style={{top: "50%", left: "5%", transform: "translateY(-50%)"}}></button>
                <form onSubmit={submitHandle}>
                    <input type="text"
                    value={projectName}
                    onChange={(e)=> setProjectName(e.target.value)}
                    autoFocus className="border rounded px-8 w-full outline-indigo-500 py-1" placeholder="Enter list name" />
                    <button type="submit"></button>
                </form>
                <button onClick={() => setFormOpen(false)} className="absolute right-3 top-3 z-10">
                    <XMarkIcon className="w-4 "></XMarkIcon>
                </button>

                
            </div>
            
        </>
    )
}

export default CreateList;

