import React, { useState } from 'react'
import './Addemploy.css'
import { InputText } from 'primereact/inputtext';
import Form from 'react-bootstrap/Form';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import logo from '../../images/logoimg.jpeg'
import axios from 'axios';
import { Dialog } from 'primereact/dialog';




const Addemploy = () => {
//
const [visible, setVisible] = useState(false);


///get the value
const [name,setname]=useState('')
const [age,setage]=useState('')
const [gen,setgen]=useState('')
const [role,setrole]=useState('')
const [mobile,setmobile]=useState('')
const [em,setem]=useState('')
const [add,setadd]=useState('')
///error
const [ernmae,setername]=useState('')
const [erage,seterage]=useState('')
const [ergen,setergen]=useState('')
const [errole,seterrole]=useState('')
const [ermobile,setermobile]=useState('')
const [ernum,seternum]=useState('')
const [erem,seterem]=useState('')
const [errem,seterrem]=useState('')
const [eradd,seteradd]=useState('')

function cheack(){

  const emp = /^([a-z0-9\._]+)@([a-z0-9])+.([a-z]+)?$/
  const Num = /[0-9]/;
  const no = /^\d{10}$/;

 

  if(name==undefined||name==""){
    setername("Please Enter The Name")
  }
  else{setername("")}
  if(age==undefined||age==""){
    seterage("please enter the age")
  }
  else{seterage("")}
  if(gen==undefined||gen==""){
    setergen("please select the gender")
  }
  else{setergen("")}
  if(role==undefined||role==""){
    seterrole("please select the role")
  }
  else{seterrole("")}
  if(mobile==undefined||mobile==""){
    setermobile("please type a mobile number")
  }
  else{setermobile("")}
  if (!no.test(mobile)) {
    seternum("10-digit  numbers only");
  }
  else {
    seternum("")
  }
  if(em==undefined||em==""){
    seterem("please enter the email")
  }
  else{seterem("")}
  if (!emp.test(em)) {
    seterrem("please enter the valid email");
  }
  else {
    seterrem("")
  }
  if(add==undefined||add==""){
    seteradd("please type your address")
  }
  else{seteradd("")}

  if(name != "" && age != "" && gen != "" && role != "" && mobile != "" && em != "" && add != "" && no.test(mobile) && emp.test(em)){
    setVisible(true)

   
  
    axios.post('http://localhost:3007/employe',{Name: name,Age: age,Gender: gen,Role: role,Mobile: mobile,Email: em,Address: add})
     
    .then(()=>{
     
    //   msgs.current.show([
    //     { sticky: true, severity: 'success', summary: 'Success', detail: ' you have Sk hospital employe ', closable: false } 
    // ]);
     
    })
    .catch(()=>{
  
    })
   

  }
  
}
// api call function
function apicall(){
  
 setVisible (false)
 window.location.reload();
}



  return (
    <div className='employ'>
      
      <div className='Sheet row'>

        <h1 className='col-lg-6' >EMPLOYEE REGISTRATION</h1>
        
        <div className='col-lg-6 text-center' >
          <img src={logo} alt='' />
        </div>

        <div className='row mt-5'>
          <div className='employ-input col-lg-4'>
            <label>Name :</label> <br></br>
            <InputText className='Gender' value={name} onChange={(e)=>setname(e.target.value)} type='text' placeholder='Name' />
            <div className='errors'>{ernmae}</div>
          </div>

          <div className='employ-input col-lg-4'>
            <label>Age :</label> <br></br>
            <InputText className='Gender' value={age} onChange={(e)=>setage(e.target.value)} type='number' placeholder='Age' />
            <div className='errors'>{erage}</div>
          </div>


          <div className='employ-input col-lg-4'>
            <label>Gender :</label><br></br>
            <Form.Select className='Gender' aria-label="Default select example" onChange={(e)=>setgen(e.target.value)} >
              <option value="">Please Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
            <div className='errors'>{ergen}</div>
          </div>


          <div className='employ-input col-lg-4'>
            <label>Job Role :</label><br></br>
            <Form.Select className='Gender' aria-label="Default select example" onChange={(e)=>setrole(e.target.value)}  >
              <option value="">Please Select Role</option>
              <option value="Doctor">Doctor</option>
              <option value="Front Office">Front Office</option>
              <option value="HR">HR</option>
            </Form.Select>
            <div className='errors'>{errole}</div>
          </div>


          <div className='employ-input col-lg-4'>
            <label>Exprience :</label> <br></br>
            <InputText className='Gender' type='number'  placeholder='Exprience' />
            <div className='errors'></div>
          </div>

          <div className='employ-input col-lg-4'>
            <label>Mobile No :</label> <br></br>
            <InputText className='Gender' type='number'  placeholder='Mobile No' maxLength={10} value={mobile} onChange={(e)=>setmobile(e.target.value)} />
            <div className='errors'>{ermobile} {ernum}</div>
          </div>

          <div className='employ-input col-lg-4'>
            <label>Shift :</label><br></br>
            <Form.Select className='Gender' aria-label="Default select example"  >
              <option value="">Please Select Shift</option>
              <option value="Gendrel">Gendrel</option>
              <option value="Night">Night</option>
            </Form.Select>
            <div className='errors'></div>
          </div>


          <div className='employ-input col-lg-4'>
            <label>Blood Group :</label><br></br>
            <Form.Select className='Gender' aria-label="Default select example"  >
              <option value="">Blood Group</option>
              <option value="A+">A  </option>
              <option value="B+">B  </option>
              <option value="0+">o  </option>
            </Form.Select>

          </div>

          <div className='employ-input col-lg-4'>
            <label>Email :</label> <br></br>
            <InputText className='Gender' type='email' placeholder='Email' value={em} onChange={(e)=>setem(e.target.value)} />
            <div className='errors'>{erem}{errem}</div>
          </div>

          <div className='row'>
            <div className='employ-input col-lg-6'>
              <label>Address :</label><br></br>
              <InputTextarea rows={3} cols={40} value={add} onChange={(e)=>setadd(e.target.value)} />
              <div className='errors'>{eradd}</div>
            </div>

            <div className='col-lg-4 mt-5'>
              {/* <Button className='Gender-btn' onClick={cheack} label="Submit" /> */}
              <Button label="Submit" className='Gender-btn'  onClick={cheack} />
                  <Dialog header="your ID is suceesfully created" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                  <Button label="Yes" className='Gender-btn' onClick={apicall}  />
                  </Dialog>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Addemploy