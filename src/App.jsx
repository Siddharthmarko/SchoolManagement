import { Routes, Route } from "react-router-dom"
import Groups from "./component/groups"
import Schools from "./component/Schools"
import AddSchools from "./component/AddSchool"
import Form from "./component/Form"
import { useState } from "react"

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Groups />} />
        <Route path="/AddGroup" element={<Form />} />
        <Route path="/editgroup/:id" element={<Form />} />
        {/* <Route path="/employee" element={<Groups />} /> */}
        <Route path="/schools/:id" element={<Schools />} />
        <Route path="/addschool/:groupid/:id" element={<AddSchools />} />
      </Routes>
    </div>
  )
}

export default App
