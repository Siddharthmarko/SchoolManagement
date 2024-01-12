import React, { useState, useReducer, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import UserContext from '../context/UserContext'


let url = 'http://localhost:3000/GroupAdmin';
export default function AddGroups() {
    let navigation = useNavigate();
    const { state } = useLocation();
    const { dispatch } = useContext(UserContext)
    
    const dummy = {
        id: Date.now().toString(),
        Name: '',
        Address: '',
        Contact_No: '',
        EmailId: '',
        CreatedBy: '',
        Schools: [],
    }
    const groupId = state.userData.Groups[state.id];
    const [text, setText] = useState(
        (state.id !== null) 
        ? groupId 
        : dummy );
    
    function sub_info(e, prop){
        setText({
            ...text,
            [prop] : e.target.value,
        });
    }
    function fetchGroup(allData){
        
        fetch(url + `/${state.userData.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(allData),

        })
        .then(res => res.json())
        .then((data) => console.log('add data', data))
        .catch((err) => console.log("err", err));
    }
    function submit(e){
        e.preventDefault();

        if(state.id === null){
            state.userData.Groups.push(text);
        } else {
            state.userData.Groups[state.id] = text
        }

        fetchGroup(state.userData);
        alert('done');
        dispatch({ type: 'initialize', payload: state.userData });
        navigation(-1);
        
    }
    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center ">
                <div className="bg-white p-8 rounded-lg shadow-lg  w-full">
                    <h2 className="text-2xl font-semibold text-center mb-4">
                        {(state.id !== null) ? 'Edit' : 'Add'} Group
                    </h2>
                  
                    <form onSubmit={(e) => submit(e)} >
                        <div className="mb-4">
                            <label htmlFor="Name" className="block text-gray-700 text-sm font-semibold mb-2">
                                Group Name
                            </label>
                            <input

                                value={text.Name}
                                name="Name"
                                onChange={(e) => sub_info(e, 'Name') }
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

                                value={text.Contact_No}
                                onChange={(e) => sub_info(e, 'Contact_No')}
                                type="tel"
                                id="ContactNumber"
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                required=""
                                placeholder=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Emailid" className="block text-gray-700 text-sm font-semibold mb-2">
                                Email Address *
                            </label>
                            <input

                                value={text.EmailId}
                                onChange={(e) => sub_info(e, 'EmailId')}
                                type="email"
                                id="Emailid"
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                required=""
                                placeholder=""
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="OwnerName" className="block text-gray-700 text-sm font-semibold mb-2">
                                CreatedBy
                            </label>
                            <input
                                value={text.CreatedBy}
                                onChange={(e) => sub_info(e, 'CreatedBy')}
                                type="text"
                                id="createBy"
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