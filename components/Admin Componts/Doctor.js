import React, { useEffect, useState } from 'react'
import axios from "axios"
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import logo from '../../images/logoimg.jpeg'
import MachineManagement from './Discribtion';
import { Checkbox } from 'primereact/checkbox';
import'./Doctor.css'


const Doctor = () => {
  // check box
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);


  // Bmi calculation
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  // next vist date
  const [numberofdays,setnumberofdays] = useState(0)
  const [visitdate,setvisitdate] =useState('')

  // patient id 
  const [pacentid, setpacentid] = useState('')
  const [data, setdata] = useState({
    Name: '',
    Age: '',
    Mobile: '',
    Purpose: ''
  })
// BMI calculation
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const weightInKg = weight;

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = (weightInKg / (heightInMeters * heightInMeters))
        .toFixed(2);
      setBMI(calculatedBMI);
    } else {
      setBMI('');
    }
  };

  // Event handlers to update state on input change
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    calculateBMI();
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    calculateBMI();

  };


/// seach patien id

  function search() {

    if (pacentid === undefined || pacentid === "") {
      window.location.reload();
    }
    else {
      axios.get(`http://localhost:3007/op/${pacentid}`)
        .then((res) => {
          const pacentdetails = res.data;
          setdata(pacentdetails)
        })
        .catch(() => {
          setdata({
            Name: '',
            Age: '',
            Mobile: '',
            Purpose: ''
          })
        })
    }

  }

  // next date

  function nextdate(){
    const today= new Date();
    const yesterday=new Date(today);
    yesterday.setDate(today.getDate()+ Number(numberofdays));
    const timeChange=yesterday.getDate() + "-"+ parseInt(yesterday.getMonth()+1) +"-"+yesterday.getFullYear();
    setvisitdate(timeChange)
  }

  return (



    <div className='employ'>
      <div className='Sheet row'>

        <h1 className='col-lg-6' >DOCTOR CHEAKING FORM</h1>

        <div className='col-lg-6 text-center' >
          <img src={logo} alt='' />
        </div>

        <div className='row mt-5'>
          <span className="p-input-icon-left mb-5">
            <i className="pi pi-search" />
            <InputText placeholder="Search patient Id" value={pacentid} onChange={(e) => setpacentid(e.target.value)} onBlur={search} />
          </span>

          <div className='employ-input col-lg-3'>
            <label>Name :</label> <br></br>
            <InputText className='Gender-2' type='text' placeholder='Name' value={data.Name} readOnly />
          </div>

          <div className='employ-input col-lg-3'>
            <label>Age :</label> <br></br>
            <InputText className='Gender-2' type='number' placeholder='Age' value={data.Age} readOnly />
          </div>

          <div className='employ-input col-lg-3'>
            <label>Mobile No :</label> <br></br>
            <InputText className='Gender-2' type='number' placeholder='Mobile no' value={data.Mobile} readOnly />
          </div>
          <div className='employ-input col-lg-3'>
            <label>Cause Of Visit :</label> <br></br>
            <InputText className='Gender-2' type='text' placeholder='Cause of Visit' value={data.Purpose} readOnly />
          </div>

          <div className='doc row'>
            <div className='employ-input col-lg-3'>
              <label>BP :</label> <br></br>
              <InputText className='' type='text' placeholder='BP' />
            </div>


            <div className='employ-input col-lg-3'>
              <label>Temp :</label> <br></br>
              <InputText className='' type='text' placeholder='Temp' />
            </div>


            <div className='employ-input col-lg-3'>
              <label>Height (cm) :</label> <br></br>
              <InputText className='' type='number' placeholder='Height' value={height} onChange={handleHeightChange} />
            </div>

            <div className='employ-input col-lg-3'>
              <label>Weight (kg) :</label> <br></br>
              <InputText className='' type='text' placeholder='Weight' value={weight} onChange={handleWeightChange} />
            </div>
            <div className='employ-input col-lg-3'>
              <label>BMI :</label> <br></br>
              <InputText className='' type='text' placeholder='BMI' value={bmi} readOnly />
            </div>


          </div>
          <MachineManagement />

          <h1 className='mt-5'>Scan Deatails</h1>
          <div className='check mt-5 mb-5'>
            <div className="">
              <Checkbox onChange={e => setChecked1(e.checked)} checked={checked1}></Checkbox>
              <label htmlFor="ingredient1" className="ml-2">X-rays</label>
            </div>

            <div className="">
              <Checkbox onChange={e => setChecked2(e.checked)} checked={checked2}></Checkbox>
              <label htmlFor="ingredient1" className="ml-2">CT scan</label>
            </div>

            <div className="">
              <Checkbox onChange={e => setChecked3(e.checked)} checked={checked3}></Checkbox>
              <label htmlFor="ingredient1" className="ml-2">MRI scan</label>
            </div>

            <div className="">
              <Checkbox onChange={e => setChecked4(e.checked)} checked={checked4}></Checkbox>
              <label htmlFor="ingredient1" className="ml-2">US scan</label>
            </div>
          </div>
          
          <div>
              <h1>Next Visit Date</h1>

              <InputText type='number' placeholder='No of days' value={numberofdays} onChange={(e)=>setnumberofdays(e.target.value)} />
              <Button icon="pi pi-check" rounded aria-label="Filter" onClick={nextdate} />
              <InputText placeholder='Next Vist Date' value={visitdate} readOnly/>
             
          </div>

        </div>
      </div>

    </div>


  )
}

export default Doctor