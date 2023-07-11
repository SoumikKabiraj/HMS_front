import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import { Row } from 'antd'
import Doctorlist from '../components/Doctorlist'

function HomePage() {
  const [doctor,setDoctor]=useState([])
  const getUserData = async() =>{
    try{
      const res =await axios.get("./HospitalManagement/getApprovedDoctors",{
        headers: {
          Authorization: "Bearer "+localStorage.getItem('token'),
        }
      });
      if(res.data.success)
      {
        setDoctor(res.data.data)
      }
      else
      {
        console.log("error in getting doctor data")
      }
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getUserData()
  },[])
  return (
    <Layout>
      <h1 className='m-2 text-left' >Home Page</h1>
      <Row>
        {
          doctor && doctor.map(doctor =>(
            <Doctorlist doctor={doctor}/>
          ))

        }
      </Row>
    </Layout>
  )
}

export default HomePage
