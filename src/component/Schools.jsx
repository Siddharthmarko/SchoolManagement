import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { allschools } from '../api/api'

export default function Schools() {
    
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
                                        Schools Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xl font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Schools Address
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xl font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Schools ContactNo.
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xl font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        {/* <Link to={`/addschool/${id}/${-1}`} className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Add school
                                        </Link> */}
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xl font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        {/* <Link to={`/`} className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Back to Group
                                        </Link> */}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                    <tr 
                                     className="bg-white border-b">
                                        <td className="text-xl text-gray-900 font-light px-6 py-4 text-left ">
                                            <strong></strong>
                                        </td>
                                        <td className="text-xl text-gray-900 font-light px-6 py-4 text-left ">
                                            <strong></strong>
                                        </td>
                                        <td className="text-xl text-gray-900 font-light px-6 py-4 text-left ">
                                            <strong></strong>
                                        </td>
                                       {/* use other than div here */} 
                                        <div>
                                            <td className="text-xl text-gray-900 font-light py-4 text-left">
                                                {/* <Link
                                                    to={`/addschool/${id}/${idx}`}
                                                    className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                                >
                                                    Edit
                                                </Link> */}
                                            </td>
                                        </div>


                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

