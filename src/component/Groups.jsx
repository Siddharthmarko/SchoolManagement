import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Groups() {
    let { state } = useLocation();
    let groupData = state.user.Groups[state.index];
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
                                        state={{userData: state.user, id: null}}
                                        className="text-sm bg-slate-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
                                    >
                                        Add Group
                                    </Link>
                                </div>
                            </div>
                            {groupData && (
                                <div key={groupData.id} className="bg-white border mb-4 p-4">
                                    <div className="flex justify-between mb-4">
                                        <div className="text-xl text-gray-900 font-medium">
                                            Group Name: <strong>{groupData.Name}</strong>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mb-4">
                                        <div className="text-xl text-gray-900 font-medium">
                                            Group Address: <strong>{groupData.Address}</strong>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="text-xl text-gray-900 font-medium">
                                            Contact No.: <strong>{groupData.Contact_No}</strong>
                                        </div>
                                        <div className="flex space-x-4">
                                            <Link
                                                to="add"
                                                state={{ userData: state.user, id: state.index }}
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

