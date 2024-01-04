import React from 'react'
import { Link } from 'react-router-dom'
import { allGroup, deleteGroup } from '../api/api'
export default function Groups() {
    // delete wala apan baad kar karte hai 
    let groupData = allGroup(0);
    // console.log(groupData);
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-xl font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Group Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xl font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Group Address
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xl font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Contact no.
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xl font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        <Link to={`/AddGroup`} className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Add Group
                                        </Link>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {  groupData.map((item, idx) => (
                                        
                                <tr key={idx} className="bg-white border-b">
                                    <td className="text-xl text-gray-900 font-light px-6 py-4 text-left ">
                                        <strong>{item.Name}</strong>
                                    </td>
                                    <td className="text-xl text-gray-900 font-light px-6 py-4 text-left ">
                                        <strong>{item.Address}</strong>
                                    </td>
                                    <td className="text-xl text-gray-900 font-light px-6 py-4 text-left ">
                                        <strong>{item.Contact_No}</strong>
                                    </td>
                                    {/* use other than div here */}
                                        <div>
                                            <td className="text-xl text-gray-900 font-light py-4 text-left">
                                                <Link
                                                    to={`/editgroup/${item._id}`}
                                                    className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                            {/* <td className="text-xl text-gray-900 font-light py-4 text-left">
                                                <Link onClick={() => deleteGroup(idx)}
                                                    className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                                >
                                                    Delete
                                                </Link>
                                            </td> */}
                                            <td className="text-xl text-gray-900 font-light py-4 text-left">
                                                <Link
                                                    to={`/schools/${item._id}`}
                                                    className="text-sm bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                                                >
                                                    See Schools
                                                </Link>
                                            </td>
                                            {/* <td className="text-xl text-gray-900 font-light py-4 text-left">
                                                <Link
                                                    to={`/employee/${item._id}`}
                                                    className="text-sm bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                                >
                                                    See Employee
                                                </Link>
                                            </td> */}
                                        </div>

                                    
                                </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

