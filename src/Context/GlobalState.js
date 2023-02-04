import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    
    const [formOpen, setFormOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pickerOpen, setPickerOpen ] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [pickedColor, setpickedColor] = useState(0);
    const [taskStatus, settaskStatus] = useState(false);
    const [taskName, settaskName] = useState("");
    const [tasks, setTasks] = useState([]);


    const allData = {
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