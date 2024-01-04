import {React, useState }from "react"
import { Link, useParams } from "react-router-dom";
import { getGroup, submitGroup } from "../api/api";

export default function AddGroups(){
    const { id } = useParams();
    let data = {
        _id: null,
        Name: "",
        Address: "",
        Contact_No: "",
        EmailId: "",
        CreatedBy: "",
    }
    const [groupinfo, setGroupInfo] = useState((id) ? getGroup(0,id): data);
    
    function updateInfo(e, prop){
        setGroupInfo(groupinfo);
        // console.log(groupinfo);
        setGroupInfo({
            ...groupinfo,
            [prop]: e.target.value,
        })
    }
    // for update and createtime ek condition deni padegi jo batayega ki kab crete aur update use karna hai
    function handleSubmit(e){
        e.preventDefault();
        console.log("yo");
        console.log(id);
        submitGroup(0, id, groupinfo);
        console.log(groupinfo);
    }
    
    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="flex justify-center mb-6">
                        <span className="inline-block bg-gray-200 rounded-full p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                                />
                            </svg>
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-4">
                        Add Group
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Enter your details 
                    </p>
                    <form onSubmit={(e) => handleSubmit(e)} >
                        <div className="mb-4">
                            <label htmlFor="Name" className="block text-gray-700 text-sm font-semibold mb-2">
                                Group Name
                            </label>
                            <input
                                onChange={(e) => updateInfo(e, 'Name') }
                                value={groupinfo.Name}
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
                                onChange={(e) => updateInfo(e, 'Address')}
                                value={groupinfo.Address}
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
                                onChange={(e) => updateInfo(e, 'Contact_No')}
                                value={groupinfo.Contact_No}
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
                                onChange={(e) => updateInfo(e, 'EmailId')}
                                value={groupinfo.EmailId}
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
                                onChange={(e) => updateInfo(e, 'CreatedBy')}
                                value={groupinfo.CreatedBy}
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
                        <div 
                            className="w-full bg-blue-500 text-white text-center my-2 px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            <Link className="text-white" to={'/'}>
                                back to Group
                            </Link>
                        </div>
                       
                        <p className="text-gray-600 text-xs text-center mt-4">
                            By clicking Register, you agree to accept Apex Financial's
                            <a href="#" className="text-blue-500 hover:underline">
                                Terms and Conditions
                            </a>
                            .
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}