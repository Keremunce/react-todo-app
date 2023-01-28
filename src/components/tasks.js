import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import TodoElement from './todoElement'



function Tasks(){
    const {projects} = useContext(GlobalContext)

    return(
        <div>
            <div className="container mx-auto p-2 w-1/2 space-y-2">
                {projects.map((project) =>{
                    return project.tasks.map((task) =>
                        <TodoElement key={task.id} date={task.date} todo={task} status={task.status} title={task.name} categoryColor={task.color}></TodoElement>
                    )
                })}
            </div>
        </div>
    )
}

export default Tasks;