import React from 'react'
import './Appointment.css'
import Form from 'react-bootstrap/Form';
import logo from '../images/logoimg.jpeg'
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import './Proceed.css';
import { Calendar } from 'primereact/calendar';
import axios from 'axios';
import { Button } from 'primereact/button';

// import Moment from 'react-moment'

import  { useRef } from 'react'; 

import { Messages } from 'primereact/messages';







const Appointment = () => {
 
  // proceed 
  const msgs = useRef(null);
  const [visible, setVisible] = useState(false);

  const [msg,setmsg] =useState(false);

  // set input data
  const [inputname, setinputname] = useState('');
  const [inputage, setinputage] = useState('');
  const [inputmoblie, setinputmobile] = useState('');
  const [inputemail, setinputemail] = useState('');
  const [inputdate, setinputdate] = useState('');
  const [inputdrList,setinputdrList] = useState('')
  const [inputdrob, setinputdrob] = useState('')
  // set error msg

  const [errorname, seterrorname] = useState('')
  const [errorage, seterrorage] = useState('')
  const [errormobile, seterrormobile] = useState('')
  const [digit, setdigit] = useState('')
  const [numberonly, setnumberonly] = useState('')
  const [erroremail, seterroremail] = useState('')
  const [email, setemail] = useState('')
  const [drob, setdrob] = useState('')
  const [errordate, seterrordate] = useState('')
  const [errDr,seterrDr]=useState('')


  // submit button click function
  function valid() {
    const em = /^([a-z0-9\._]+)@([a-z0-9])+.([a-z]+)?$/
    const Num = /[0-9]/;
    const no = /^\d{10}$/;
    // if(  proceed ){
    //  console.log("selva")

    if (inputname === undefined || inputname === "") {
      seterrorname("please enter the name");
    }
    else {
      seterrorname("")
    }
    if (inputage === undefined || inputage === "") {
      seterrorage("please enter the age");
    }
    else {
      seterrorage("")
    }
    if (inputage<0){
      inputage=1;
    }
    if (inputmoblie === undefined || inputmoblie === "") {
      seterrormobile("please enter the mobile no")
    }
    else {
      seterrormobile("")
    }
    if (!no.test(inputmoblie)) {
      setdigit("10-digit only");
    }
    else {
      setdigit("")
    }
    if (!Num.test(inputmoblie)) {
      setnumberonly("numbers only");
    }
    else {
      setnumberonly("")
    }
    if (inputemail === undefined || inputemail === "") {
      seterroremail("please enter the name");
    }
    else {
      seterroremail("")
    }
    if (!em.test(inputemail)) {
      setemail("please enter the valid email");
    }
    else {
      setemail("")
    }
    if (inputdrob === '') {
      setdrob("Please select an option")
    }
    else {
      setdrob("")
    }
    if (inputdrList === '') {
      seterrDr("Please select an option")
    }
    else {
      seterrDr("")
    }
    // }
    // else{

    // }
    if (inputname != "" && inputage != "" && inputmoblie != "" && inputemail != "" && inputdrob != ""&&inputdrList!="" && no.test(inputmoblie) && em.test(inputemail)) {
      setVisible(true)
    }


  }
  function timer(e){
 setinputdate(e.target.value)
//  console.log("thasa",e.target.value)
//  e.target.value=new Date();
 const timeChange=e.target.value.getFullYear() + "-"+ parseInt(e.target.value.getMonth()+1) +"-"+e.target.value.getDate();
 setinputdate(timeChange)
 

  }

/// submit button function


  function ChangeClick() {

    if (inputdate === undefined || inputdate == "") {
      seterrordate("Please select both date and time.")
    }
    else {

      seterrordate("")
    }

    if (inputdate != "") {
      //api call
      axios.post(' http://localhost:3007/op ', { Name: inputname, Age: inputage, Mobile: inputmoblie,Purpose:inputdrob,Email: inputemail,selctdoctor:inputdrList, Date: inputdate })
        .then(() => {
          // msgs.current.show([
            // { sticky: true, severity: 'success', summary: 'Success', detail: ' Successfully Appointment', closable: false },
            //     ]);
            //     if (inputdate != "") {
            //       setVisible(false)
            //     }
            //     else {
            //       setVisible(true)
            //     }
            //     if (inputdate != "") {
            //       window.location.reload();
            //     }
            setmsg(true)
      
        })
        .catch(() => {
          console.log("not add");
          msgs.current.show([
            { sticky: true, severity: 'error', summary: 'Error', detail: 'please try again', closable: false },
                ]);
          
        })
    }

  
  }
  function check(){
    setmsg(false)
    window.location.reload()
  }
 

  return (
    <div className='header'>
           <Messages ref={msgs} />
      <div className='appoint-form row'>
        <h1 className='col-lg-6'>BOOK YOUR APPOINTMENT</h1>
       
        <div className='col-lg-6 text-center'>
          <img src={logo} alt='' />
        </div>
        <div className='row'>


          <div className='child col-lg-6'>
            <label>Name :</label><br></br>
            <input type='text'
              required
              placeholder='Name'
              name='Name'
              value={inputname}
              onChange={(e) => setinputname(e.target.value)}
            />
            <div className='errors'>{errorname}</div>
          </div>


          <div className='child col-lg-6'>
            <label>Age :</label><br></br>
            <input type='number'
              required
              placeholder='Age'
              name='Age'
              value={inputage}
              onChange={(e) => setinputage(e.target.value)}
            />
            <div className='errors'>{errorage}</div>
          </div>


          <div className='child col-lg-6'>
            <label>Mobile no :</label><br></br>
            <input type='number'
              required
              placeholder='Mobile no'
              name='Mobile'
              value={inputmoblie}
              onChange={(e) => setinputmobile(e.target.value)}
               
            />
            <div className='errors'>{errormobile} {digit} {numberonly}</div>
          </div>


          <div className='child col-lg-6'>
            <label>Email :</label><br></br>
            <input type='email'
              required
              placeholder='E-mail'
              name='Email'
              value={inputemail}
              onChange={(e) => setinputemail(e.target.value)}

            />
            <div className='errors'>{erroremail}{email}</div>
          </div>


          <div className='child col-lg-6'>
            <label>cause of visit :</label><br></br>
            {/* <input type='text' required ></input> */}
            <Form.Select className='child-1 col-lg-6' aria-label="Default select example" name='Causeofvisit' onChange={(e) => setinputdrob(e.target.value)}  >
              <option value="">Open this select menu</option>
              <option value="Fever">Fever</option>
              <option value="Headpain">Head pain</option>
              <option value="Accident">Accident</option>
            </Form.Select>
            <div className='errors'>{drob}</div>
          </div>

          <div className='child col-lg-6'>
            <label>Select your doctor :</label><br></br>
            {/* <input type='text' required ></input> */}
            <Form.Select className='child-1 col-lg-6' aria-label="Default select example" name='Causeofvisit' onChange={(e) => setinputdrList(e.target.value)}  >
              <option value="">Open this select menu</option>
              <option value="Dr.list-1">Dr.list-1</option>
              <option value="Dr.list-2">Dr.list-2</option>
              <option value="Dr.list-3">Dr.list-3</option>
            </Form.Select>
            <div className='errors'>{errDr}</div>
          </div>


          <div className='child6 col-lg-6'>
            <div className="card flex justify-content-center">
              <button className="but" onClick={valid}>Proceed</button>

              <Dialog header="Select Appointment Date and Time" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>

                <Calendar placeholder="Date"
                  className="mr-5"
                  dateFormat="dd/mm/yy"
                  name='Dates'
                  value={inputdate}
                  showTime hourFormat="24"
                  onChange={timer}
                  
                />

                <button className="btn-1" onClick={ChangeClick}>submit</button>
                <Dialog header="your Appointment is suceesfully submitted" visible={msg} style={{ width: '50vw' }} onHide={() => setmsg(false)}>
                  <Button label="Ok" className='Gender-btn' onClick={check}  />
                  </Dialog>
                <div className='errors'>{errordate}</div>
              </Dialog>
              
            </div>
            
        
          </div>
        </div>
        <Messages ref={msgs} />
      </div>
    </div>
  )
}

export default Appointment