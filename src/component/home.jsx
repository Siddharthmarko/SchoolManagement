import React, { useEffect, useState } from "react";
import {NavLink, Outlet } from "react-router-dom";

const url = 'http://localhost:3000/GroupAdmin';
const userId = 0;
export default function Home(){
    const [hidden, setHidden] =  useState(true);
    const [userData, setUserData] = useState([]);

    async function fetchData(){
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data[userId];
    }catch ( err){
        console.log(err);
        return [];
    }
  }
    useEffect(() => {
        fetchData().then((data) => 
        setUserData(data))
    }, []);

    // this sublist need to improve yet it only good for one group
    function sub_list(e){
        setHidden(!hidden);
    }


return (
    <div className="flex" >       
            <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
                <nav>
                    <ul className="space-y-2">
                        {(userData.Groups) ? userData.Groups.map((data) => {
                            console.log("Data before passing to state:", data);
                        return <li key={data._id} className="opcion-con-desplegable group">
                            <NavLink to={{ pathname: "group", state: { group: data  } }} onClick={(e) => sub_list(e)} className="text-white flex items-center justify-between p-2 hover:bg-gray-700">
                            <div className="flex items-center">
                                <span>{data.Name}</span>
                            </div>
                            <i className="fas fa-chevron-down text-xs" />
                            </NavLink>
                            <ul className="desplegable ml-4 ">
                            {data.Schools.map((data) => {
                                return <li key={data._id} style={{display : (hidden) ? 'none' : 'block'}} className=" child-list">
                                        <NavLink
                                        to={`school/Id`}
                                            className="block p-2 text-white hover:bg-gray-700 flex items-center"
                                        >
                                            <i className="fas fa-chevron-right mr-2 text-xs" />
                                            {data.Name}
                                        </NavLink>
                                    </li>                
                            })}
                                </ul>
                      
                    </li>
        }) : ''}
                    </ul>
                </nav>
            </aside>
            <div>
             <Outlet/>
            </div>
    </div>
)
}
// https://tailwindcomponents.com/component/salud-360-1