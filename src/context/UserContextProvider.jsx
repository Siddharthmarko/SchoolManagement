import React, { useReducer, useEffect } from "react";
import UserContext from "./UserContext";
import database from '../../Jsonserver/localdata.json'

const userId = 0;
const url = 'http://localhost:3000/GroupAdmin';
function reducer(state, action) {
    switch (action.type) {
        case 'update':
            return action.payload;
        case 'initialize':
            return action.payload; // Set the entire state based on the payload
        default:
            throw new Error('Unknown action: ' + action.type);
    }
}

const UserContextProvider = ({ children }) => {
    const [userData, dispatch] = useReducer(reducer, { name: '', age: 0 });
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                const fetchedData = data[userId];
                dispatch({ type: 'initialize', payload: fetchedData });
            } catch (err) {
                console.log(err);
                // console.log("Fetch failed. Using local data instead.", err);
                // Use local data here
                const localData = database;
                dispatch({ type: 'initialize', payload: localData });
            }
        }

        fetchData();
    }, []);
    return (
        <UserContext.Provider value={{ userData, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider