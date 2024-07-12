import React, { useEffect, useState } from 'react'
import logo from '../images/logoimg.jpeg'
import { InputText } from 'primereact/inputtext';
import './Login.css';



// import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    //value get
    const [employeid,setemployeid] = useState('')
    const [password,setpassword] = useState('')
    const [data,setdata] = useState([])
    
    const [errorid,seterrorid] = useState('')
    const [errorpass,seterrorpass] = useState('')
    const [er,seter] = useState('')
    const navigate =useNavigate()


   
    // api call

    useEffect(()=>{
    axios.get('http://localhost:3007/employe')
    .then((res)=>{
        setdata(res.data)
    })
    .catch((error)=>{
        console.error(error);
    })
},[])

   


   function checkInHandler(){
      
const main = Number(employeid);

if (!employeid) {
    seterrorid("Please enter the Employee ID");
} else {
    seterrorid("");
}

if (!password) {
    seterrorpass("Please enter the Password");
} else {
    seterrorpass("");
}

if (employeid && password) {
    const final = data.find((user) => user.id === main);

    if (final && final.Password === password) {
        navigate('/Admin', { state: final });
        sessionStorage.setItem("ID", employeid);
        seter('');
    } else {
        seterrorpass("Please enter valid password");
    }
}

  }



    return (
        <div className='employ'>

            <div className='Sheet-1 row'>

                <h1 className='col-lg-6' >LOG IN </h1>

                <div className='col-lg-6 text-center' >
                    <img src={logo} alt='' />
                </div>

                <div className='row mt-5'>
                    <div className='employ-input'>
                        <label>Employe ID :</label> <br></br>
                        <InputText className='Gender' type='number' value={employeid} onChange={(e)=>setemployeid(e.target.value)} />
                        <div className='errors'>{errorid}</div>
                    </div>
                    <div className='employ-input'>
                        <label>Password :</label> <br></br>
                        <InputText className='Gender' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        <div className='errors'>{errorpass}</div>
                    </div>
                    <div className='employ-input mt-4'>
                        <Button className='Gender' severity="info" onClick={checkInHandler}  raised >Check In</Button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login