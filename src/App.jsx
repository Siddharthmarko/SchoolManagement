import { Routes, Route } from "react-router-dom"
import Groups from './component/Groups'
import Schools from "./component/Schools"
import AddSchools from "./component/AddSchool"
import { useState } from "react"
import Home from "./component/home"
import New from "./component/newForm"
import Layout from "./component/layout"
import Default_admin from "./component/default_admin"

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route index element={<Default_admin />} />
          <Route path="group" element={<Groups/>}/>
          <Route path="school/:id" element={<Schools />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
