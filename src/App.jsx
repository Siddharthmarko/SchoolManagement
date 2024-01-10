import { Routes, Route } from "react-router-dom"
import Groups from './component/Groups'
import Schools from "./component/Schools"
import AddSchools from "./component/AddSchool"
import { useState } from "react"
import Home from "./component/home"
import New from "./component/newForm"
import Layout from "./component/layout"
import Default_admin from "./component/default_admin"
import NewForm from './component/newForm'
import SchoolForm from "./component/schoolForm"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route index element={<Default_admin />} />
          <Route path="group" element={<Groups/>}/>
          <Route path="group/add" element={<NewForm />} />
          <Route path="school" element={<Schools />} />
          <Route path="school/add" element={<SchoolForm />} />
        </Route>
      </Routes>  
    </div>
  )
}

export default App
