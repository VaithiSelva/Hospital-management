import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import img1 from '../images/slide-four.jpg'
import Homefristpage from './Home-1';


const Home = () => {
    return (
        <div>
            <div className='container-1'>
                <div className='nav'>
                    <Link className='logo' to='/'><i class="fa-solid fa-stethoscope"></i> SK Hospital</Link>
                    <ul className='mt-3'>
                        <li><Link className='li' to='/Login'><i class="fa-solid fa-lock"></i> Admin</Link></li>
                        <li> <Link className='li' to='/Appointment'> <i class="fa-solid fa-book"></i> Book An Appointment</Link></li>

                    </ul>
                </div>
            </div>
            <div className='container-2'>

                {/* <img src={img1} alt='' /> */}
                <div className='head'>
                    <p className='head-p text-light'>WELCOME TO SK HOSPITAL</p>
                    <h1 className='head-h'>Best Healthcare</h1>
                    <h1 className='head-h'>Solution In Your City</h1>
                    <button className='head-btn'>Appointment</button>
                </div>
            </div>
            <Homefristpage />
        </div>
    )
}

export default Home