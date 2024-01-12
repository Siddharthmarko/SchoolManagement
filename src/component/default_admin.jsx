import React, {useContext, } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import UserContext from "./UserContext";
import UserContext from '../context/UserContext';
import database from '../../Jsonserver/localdata.json'

export default function Default_admin(){
    const { userData, dispatch } = useContext(UserContext)
    dispatch({ type: 'initialize', payload: userData });
    return (
        <>
        <Link 
           to={'/group/add'}
                state={{ userData: userData, id: null }} 
        > Add Groups</Link>
            <h1 style={{
                margin:'50px',
            }} >Default page After Admin Login</h1>
        </>
    )
}