import React from "react"

export default function AddGroups() {
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
                    <form >
                        <div className="mb-4">
                            <label htmlFor="Name" className="block text-gray-700 text-sm font-semibold mb-2">
                                Group Name
                            </label>
                            <input
                                
                                
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