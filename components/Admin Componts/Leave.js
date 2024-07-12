import React, { useState } from 'react'
import './Leave.css'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import logo from '../../images/logoimg.jpeg'
import { Calendar } from 'primereact/calendar';
import { useEffect } from 'react';
import axios from "axios"
import { Dialog } from 'primereact/dialog';
        

const Leave = () => {


const [visible, setVisible] = useState(false);

  const [data, setdata] = useState({
    Name: '',
    id:''
  })
  useEffect(() => {
    if(sessionStorage.getItem("ID")){
    axios.get(`http://localhost:3007/employe/${sessionStorage.getItem('ID')}`)
    .then((res)=>{
      setdata(res.data)
    })

    // Retrieve the value from sessionStorage
  }

  }, []); 

  function check(){
    setVisible(false)
    window.location.reload()
  }
  return (
    <div className='leeve'>
      <div className='entry row p-5'>
        <h1 className='col-lg-6' >APPLY LEAVE</h1>

        <div className='col-lg-6 text-center' >
          <img src={logo} alt='' />
        </div>

        <div className='row mt-5'>

          <div className='employ-input col-lg-6'>
            <label>Name :</label> <br></br>
            <InputText className='Gender' type='text' value={data.Name} readOnly placeholder='Name' />
          </div>

          <div className='employ-input col-lg-6'>
            <label>Employ Id:</label> <br></br>
            <InputText className='Gender' type='number' value={data.id} readOnly placeholder='Employ Id' />
          </div>

          <div className='employ-input col-lg-6'>
            <label>Reson :</label><br></br>
            <InputTextarea rows={3} cols={40} placeholder='write a reason' />
          </div>
          <div className='employ-input col-lg-2'>
            <label>From Date :</label><br></br>
            <Calendar  dateFormat="dd/mm/yy" />
          </div>
          <div className='employ-input col-lg-2'>
            <label>To Date :</label><br></br>
            <Calendar dateFormat="dd/mm/yy" />
          </div>

          <div className='col-lg-4 mt-5'>
           <Button className='Gender-btn w-50' onClick={()=>setVisible(true)} label="Submit"  />
                  <Dialog header="your Permission is suceesfully Updated" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                  <Button label="Ok" className='Gender-btn' onClick={check}  />
                  </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leave