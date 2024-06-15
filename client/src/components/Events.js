import React from 'react'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import EventCard from './EventCard'
function Events() {
    const token = localStorage.getItem('token')
    const [events,setEvents]=useState([])
    const axiosWithToken = axios.create({
        headers:{Authorization: `Bearer ${token}`}
    }) 
    const getArt= async ()=>{
        let res = await axiosWithToken.get(`https://alumni-connect-sigma.vercel.app/student-api/events`);
        setEvents(res.data.payload)
        console.log(events)
    }

    useEffect(()=>{
        getArt()
    },[])
    return (
        <div className="" style={{ margin: '2rem'}}>
        <div className="row gy-5 gx-3">
            {events.map((a)=><div className="col-sm-12 col-md-4 col-lg-3 mb-2"><EventCard a={a}/></div>)}
        </div>
        </div>
    )
}

export default Events
