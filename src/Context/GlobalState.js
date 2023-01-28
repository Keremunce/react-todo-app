import { createContext, useState } from "react";
import projectList from '../components/utils/projects.json';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [projects, setProjects] = useState(projectList.projects);
    const [formOpen, setFormOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pickerOpen, setPickerOpen ] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [pickedColor, setpickedColor] = useState(0);
    const [tasks, setTasks] = useState(projectList.projects.tasks);
    const [taskStatus, settaskStatus] = useState(false);
    const [taskName, settaskName] = useState();


    const allData = {
        projects, setProjects,
        formOpen, setFormOpen,
        showModal, setShowModal,
        pickerOpen, setPickerOpen,
        projectName, setProjectName,
        pickedColor, setpickedColor,
        taskStatus, settaskStatus,
        taskName, settaskName,
        tasks, setTasks
    }
    return(
        <GlobalContext.Provider value={allData}>
            {props.children}
        </GlobalContext.Provider>
    )
};