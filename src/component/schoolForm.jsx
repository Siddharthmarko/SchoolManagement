import React, { useState, useContext } from "react"
import UserContext from '../context/UserContext'

import { useLocation, useNavigate } from "react-router-dom"

let url = 'http://localhost:3000/GroupAdmin';
export default function SchoolForm() {
    let navigate = useNavigate();
    const { dispatch } = useContext(UserContext)

    const {state} = useLocation();
    const dummy =  {
        Name: '',
        Address: '',
        ContactNo: '',
    }
    let schoolsData = state.user.Groups[state.groupIdx].Schools[state.index];
    // console.log(schoolsData);
    const [text, setText] = useState((state.index === null) ? dummy : schoolsData )
    function sub_info(e, prop){
        setText({
            ...text,
            [prop]: e.target.value,
        })
    }
    function fetchData(allData){
        fetch(url + `/${state.user.id}`, {
            method: 'put',
            header: {'Context-Type': 'application/json',},
            body: JSON.stringify(allData),
        })
        .then((data) => data.json())
        .then(data => console.log(data))
        .catch((err) => console.log("erro", err));
        
    }
    function submit(e){
        e.preventDefault();
    schoolsData = state.user.Groups[state.groupIdx].Schools[state.index];
    if(state.index === null){
        state.user.Groups[state.groupIdx].Schools.push(text);
    } else {
        state.user.Groups[state.groupIdx].Schools[state.index] = text;
    }
    
    fetchData(state.user);
    alert('done');
    navigate(-1);
    dispatch({ type: 'initialize', payload: state.user });

    }

   
    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center ">
                <div className="bg-white p-8 rounded-lg shadow-lg  w-full">
                    <h2 className="text-2xl font-semibold text-center mb-4">
                        {(state.index !== null) ? 'Edit' : 'Add'} school
                    </h2>

                    <form onSubmit={(e) => submit(e)} >
                        <div className="mb-4">
                            <label htmlFor="Name" className="block text-gray-700 text-sm font-semibold mb-2">
                                Group Name
                            </label>
                            <input

                                value={text.Name}
                                name="Name"
                                onChange={(e) => sub_info(e, 'Name')}
                                type="text"
                                id="Name"
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                required=""
                                placeholder=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Address" className="block text-gray-700 text-sm font-semibold mb-2">
                                Address
                            </label>
                            <input

                                value={text.Address}
                                onChange={(e) => sub_info(e, 'Address')}
                                type="text"
                                id="Address"
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                required=""
                                placeholder=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="ContactNumber"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Contact Number
                            </label>
                            <input

                                value={text.ContactNo}
                                onChange={(e) => sub_info(e, 'ContactNo')}
                                type="tel"
                                id="ContactNumber"
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                required=""
                                placeholder=""
                            />
                        </div>
                        <button
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}