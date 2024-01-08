
export default function Layout(){
    return (
        <>
        
            <title>School</title>
            <nav className="bg-blue-500 p-4 flex items-center justify-between">
                <div>
                    <h1 className="text-white text-xl font-semibold">School System</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-white">User Name</span>
                    <i className="fas fa-user-circle text-white text-2xl" />
                </div>
            </nav>
        </>
    )
}