import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { allschools } from '../api/api'

export default function Schools() {
    // state = {{ user: userData, groupIdx: idx, index: schoolIdx }}
    let { state } = useLocation();
    let schoolsData = state.user.Groups[state.groupIdx].Schools[state.index];
    // console.log(schoolsData);
    return (
        
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="flex flex-col">
                            <div className="flex justify-between mb-4">
                                <div className="text-xl text-gray-900 font-medium">
                                    <Link
                                        to="add"
                                        // state={{ userData: state.user, id: null }}
                                        state={{...state, index : null}}
                                        className="text-sm bg-slate-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
                                    >
                                        Add schools
                                    </Link>
                                </div>
                            </div>
                            {schoolsData && (
                                <div key={schoolsData.id} className="bg-white border mb-4 p-4">
                                    <div className="flex justify-between mb-4">
                                        <div className="text-xl text-gray-900 font-medium">
                                            Group Name: <strong>{schoolsData.Name}</strong>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mb-4">
                                        <div className="text-xl text-gray-900 font-medium">
                                            Group Address: <strong>{schoolsData.Address}</strong>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="text-xl text-gray-900 font-medium">
                                            Contact No.: <strong>{schoolsData.ContactNo}</strong>
                                        </div>
                                        <div className="flex space-x-4">
                                            <Link
                                                to="add"
                                                // state={{ userData: state.user, id: state.index }}
                                                state={state}
                                                className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                            >
                                                Edit
                                            </Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

