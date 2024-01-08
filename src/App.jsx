import { Routes, Route } from "react-router-dom"
import Groups from './component/Groups'
import Schools from "./component/Schools"
import AddSchools from "./component/AddSchool"
import Form from "./component/Form"
import { useState } from "react"
import Home from "./component/home"
import New from "./component/newForm"
import Layout from "./component/layout"

function App() {
  
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home/>} >
          <Route path="/AddGroup" element={<New />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
