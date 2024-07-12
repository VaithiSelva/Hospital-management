import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import PaginatorBasicDemo from './Admin Componts/Table'
import { useLocation } from 'react-router-dom'



import './Admin.css'

const Admin = () => {
  const [selectoption,setselctoption]=useState('')
  const location = useLocation()

 

  if(selectoption==="checkout"){
    sessionStorage.removeItem('ID')
    window.location.href="/login";  
  }
 


  return (
    <div>
    <div className='container-9'>
      <div className='nav'>
        <Link className='logo' to='/'><i class="fa-solid fa-stethoscope"></i> SK Hospital</Link>
        <ul className='mt-3'>
          <li><Link className='li' to='/Leave'>Apply Leave</Link></li>
          <li className={location.state.Role==="Doctor" ? "" : "hiiden" } ><Link className='li' to='/Doctor'>Doctor Visit</Link></li>
          <li  className={location.state.Role==="Front Office" ? "" : "hiiden" } ><Link className='li' to='/Appointment'>OP entry</Link></li>
          <li   className={location.state.Role==="HR" ? "" : "hiiden" }><Link className='li' to='/Addemploy'>Add Employe</Link></li>
          <li><Link className='li' to='/Editprofile'>Edit Profile</Link></li>
          <li className='user'>
          <i class="fa-solid fa-user"></i>
          </li>
          <li className='www' onChange={(e)=>setselctoption(e.target.value)}><select>
            <option value="">{location.state.Name} {location.state.Role}</option>
            <option value="checkout">Check Out</option>
            </select></li>
           
        </ul>
      </div>
      
    </div>
    <PaginatorBasicDemo />
    </div>
  )
}

export default Admin