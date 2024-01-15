import React, {useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [demoObj, setDemoObj] = useState([]);

    return (
        <UserContext.Provider value={{ demoObj, setDemoObj }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider