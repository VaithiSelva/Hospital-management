
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import './Proceed.css';
import { Calendar } from 'primereact/calendar';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <button className="but" onClick={() => setVisible(true)}>Proceed</button>
            <Dialog header="Select Appointment Date and Time" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>

                <Calendar placeholder="Date" className="mr-5" dateFormat="dd/mm/yy" />
                <Calendar placeholder="Time" className="mr-5"timeOnly/>
                <button className="btn-1">submit</button>
            </Dialog>
        </div>
    )
}
