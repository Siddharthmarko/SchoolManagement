import React, { useState, useEffect, useReducer, useContext } from "react"
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'

function Form({data}){
  
  let info = {}
  function submitSchool(){
    data.School.push(info);
  }
  console.log(data);
  function submitGroup(){
    info.School = []; 
    data.push(info);
  }

function edit(e, prop){
  info = {
    ...info,
      [prop] : e.target.value,
    }
}

  return (
    <div>
      <input onChange={(e) => edit(e, 'Name')} type="text" value={data?.Name} />
      <input onChange={(e) => edit(e, 'Number')} type="text" value={data?.Number} />
      <input onChange={(e) => edit(e, 'Hidden')} type="text" value={data?.Hidden} />
      <button onClick={() => (data?.School) ? submitSchool () : submitGroup()} > submit</button>
    </div>
  )
}

function Name({ hasList = false, data, nextlList }){
const [hide, setHide] = useState(false);
const [edit, setEdit] = useState(false);
const [addArray, setAddArray] = useState(false);

// console.log(data);
return (
  <div className="list" >
    <h2>Heading </h2>
    <button onClick={() => {setHide(!hide); setAddArray(false); setEdit(false)}}>Details</button>
    <button onClick={() => setAddArray(!addArray)} >Add school</button>
    <button onClick={()=> {setEdit(true); setAddArray(false); setHide(false)}} >Edit This</button>
    {!hasList ? '' : <button onClick={ () => nextlList()} >Next list</button>}  
  {
    (addArray)
    ? <Form data={data.School} />
        : <div hidden={hide}>
          {
            (!edit)
              ? <div>
                <h2>Name : {data?.Name}</h2>
                <h2>Number : {data?.Number}</h2>
                <h2>Hidden : {data?.Hidden}</h2>
              </div>
              : <div>
                <input onChange={(e) => edit(e)} type="text" value={data?.Name} />
                <input onChange={(e) => edit(e)} type="text" value={data?.Number} />
                <input onChange={(e) => edit(e)} type="text" value={data?.Hidden} />
              </div>
          }

        </div>
  }
  
  </div>
)
}

function Details(){
  // const [demoObj, setDemoObj] = useState([]);
  const {demoObj} = useContext(UserContext)
  // console.log(demoObj);
  const [secondList,setSecondList] = useState(true);
  const [thirdList, setThirdList] = useState(true);
  const [form, setForm] = useState(false);

  console.log(demoObj);
  function formOpen(){
    setForm(!form);
  }

  function hideThird(){
    setThirdList(!thirdList);
  }
  function hideSecond(){
    setSecondList(!secondList);
  }

  return ( 
    <div>
      <button onClick={() => formOpen() } >Add Group</button>
      {form ? <Form data={demoObj} /> : ''}
      {
        (demoObj.length > 0) 
        ? demoObj.map((item) => {
          // console.log(item);
          let hasSchool = item.School;
          let schoolList = (hasSchool.length >= 1) ? true : false;
          // console.log(hasSchool.length);
          return <ul>
              <li>
              <Name data={item} hasList={schoolList} nextlList={hideThird} />
                {
                  (hasSchool.length > 0) 
                  ? hasSchool.map((item) => {

                    return <ul hidden={thirdList} >
                      <li>
                        <Name data={item} hasList={false}/>
                      </li>
                    </ul>
                  }) : ''
                }
              </li>
          </ul>
        })
        : ''
      }
    </div>
  )
}

function App() {

  return (
    <UserContextProvider>
        <Details />
    </UserContextProvider>
  )
}

export default App
