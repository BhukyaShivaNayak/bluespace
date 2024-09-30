import React, { useEffect, useState } from 'react'

//import { NavLink } from "react-router-dom"
import axios from "axios"


import "./header.css"

const Header=()=>
    
    
    {
        const [userdata, setUserdata] = useState({});

        const getUser = async () => {
            try {
                const response = await axios.get("http://localhost:6007/login/sucess", { withCredentials: true });
    
                setUserdata(response.data.user)
            } catch (error) {
                console.log("error", error)
            }
        }
    
        // logoout
        /*const logout = ()=>{
            window.open("http://localhost:6005/logout","_self")
        }*/
        useEffect(() => {
            getUser()
        }, [])

    return (
    <>
    <div className="header">
       <div className="">
        <img src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1724151738/logo_2_1_srvovf.png" alt="" className='logo' />

       </div>
       <div className="right-section">
      {/* <div className="searchbar">
 <input type="search" className="searchit" placeholder="Search for canddate job openings, clients, contacts"/>
        </div>*/}

<div className="searchbar">
  <div className="search-wrapper">
    <i className="fa fa-search"></i>
    <input type="search" className="searchit" placeholder="Search for candidate job openings, clients, contacts"/>
  </div>
</div>

        <div className="logo1">
        <img src={userdata.image} className='profile-pic' alt=""/>

       </div>
       </div>
    </div>
    <p className="name-section">Welcome {userdata.displayName},</p>
    </>
)
    }
export default Header
