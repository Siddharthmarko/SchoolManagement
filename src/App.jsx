import React, { useState, useEffect, useContext } from "react"
import UserContext from './context/UserContext'

function Form({data = []}){
  const {demoObj, setDemoObj } = useContext(UserContext);
  const [input, setInput] = useState({});
  
  function submitForm(e){
    e.preventDefault();
    
    if (Array.isArray(data)) {
       input.School = [];
       demoObj.push(input);
       setDemoObj(demoObj)
    } else {
      demoObj[data.id]?.School.push(input);
      console.log(demoObj); 
      setDemoObj(demoObj);
    }
     
  }
  function changeInput(e){
    const {name,value} = e.target;
    setInput((input) => ({...input, [name]: value}))
  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input type="text" name="Name" onChange={(e) => changeInput(e)} value={input?.Name} />
        <input type="text" name="Number" onChange={(e) => changeInput(e)} value={input?.Number} />
        <input type="text" name="Hidde" onChange={(e) => changeInput(e)} value={input?.Hidden}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

function Groups({ data, showSchool }){
  const [editable, setEditable] = useState(true);
  const [input, setInput] = useState(data);
  const { demoObj, setDemoObj } = useContext(UserContext);
  const [show, setShow] = useState(true);
  const [add, setAdd] = useState(false);

  
  function handleEit(){
    setEditable(!editable);
    if(!editable){
      demoObj[data.id] = data;
      setDemoObj(demoObj);
      console.log(demoObj);
    }
  }

  function changeInput(e) {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }))
  }
    return(
      <div>
        <button onClick={() => setShow(!show)}>Show details</button>
        <button onClick={() => setAdd(!add)}>Add School</button>
        <button onClick={() => showSchool(data.id)}>show School</button>
        {(add) ? <Form data={data}/> : ''} 
        {(show) 
        ? <div> 
          <button onClick={() => handleEit()} >{(editable) ? 'Edit' : 'Save'}</button>
            <h3>Details</h3>
          <input type="text" name="Name" onChange={(e) => changeInput(e)} value={input?.Name} readOnly={editable}/>
          <input type="text" name="Number" onChange={(e) => changeInput(e)} value={input?.Number} readOnly={editable} />
          <input type="text" name="Hidde" onChange={(e) => changeInput(e)} value={input?.Hidden} readOnly={editable} /> 
        </div> : ''}
      </div>
    )
}
function School({ data }) {
  const [editable, setEditable] = useState(true);
  const [input, setInput] = useState(data);
  const { demoObj, setDemoObj } = useContext(UserContext);
  const [show, setShow] = useState(false);

  function handledit() {
    console.log(input)
    setEditable(!editable);
    if (!editable) {
      demoObj[data.Groupid].School[data.id] = input;
      console.log(demoObj);
      setDemoObj(demoObj);
    }
  }

  function changeInput(e) {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }))
  }
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show school details</button>
    
      {(show)
        ? <div>
          <button onClick={() => handledit()} >{(editable) ? 'Edit' : 'Save'}</button>
          <input type="text" name="Name" onChange={(e) => changeInput(e)} value={input?.Name} readOnly={editable} />
          <input type="text" name="Number" onChange={(e) => changeInput(e)} value={input?.Number} readOnly={editable} />
          <input type="text" name="Hidde" onChange={(e) => changeInput(e)} value={input?.Hidden} readOnly={editable} />
        </div> : ''}
    </div>
  )
}
export default function App(){
  const [form, setForm] = useState();
  const { demoObj } = useContext(UserContext);
  const [show, setShowSchool] = useState(false);

  function showSchool(id){
    if(show === id){
      setShowSchool(false);
    } else {
      setShowSchool(id)
    }
  }
  return (
    <div>
      <button onClick={() => setForm(!form)}>Add Group</button>
      {form ? <Form /> : ''}
      {
        (demoObj?.length > 0) 
        ? demoObj.map((data, Groupidx) => {
          data.id = Groupidx;
          let school = data.School;
          
          return (
            <div className="ul">

              <Groups data={data} showSchool={showSchool}/>

              { (show === Groupidx) 
              ? (school.length > 0) 
              ? school.map((data, index) => {
                data.id = index;
                data.Groupid = Groupidx;
                return <div className="list">
                          <School data={data}/> 
                      </div> 

              }) : 'no record' : '' }
            </div>
          )
        }) : ''
      }

    </div>
  )
}