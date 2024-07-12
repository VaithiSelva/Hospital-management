// src/MachineManagement.js
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import './Discribtion.css'
import { Button } from 'primereact/button';


function MachineManagement() {
  const [machineName, setMachineName] = useState('');
  const [machines, setMachines] = useState([]);

  const createMachineObject = () => {
    if (machineName.trim() === '') {
      return; // Don't create an empty machine object
    }

    const newMachine = {
      id: Date.now(),
      name: machineName,
    };

    setMachines([...machines, newMachine]);
    setMachineName('');
  };

  const deleteMachine = (id) => {
    const updatedMachines = machines.filter((machine) => machine.id !== id);
    setMachines(updatedMachines);
  };

  return (
    <div className='mt-5'>
      <h1 className='mb-5'>Madichine Details</h1>
      <InputText
        type="text"
        placeholder="Enter Tablets Name"
        value={machineName}
        onChange={(e) => setMachineName(e.target.value)}
      />
      {/* <button onClick={createMachineObject}>Create Object</button> */}
      <Button label="Add" icon="pi pi-plus" onClick={createMachineObject} />


      <div className='d row mt-5' >
        {machines.map((machine) => (
          <div key={machine.id} className='object col-lg-3 mr-5 '>
            <div className='mt-2'>
              <strong className='pr-5 '>{machine.name}</strong>
            </div>
            <div className='mt-2'>
              <label className='pr-1'>M</label>
              <input className='mr-3' type='checkbox' />
              <label className='pr-1'>A</label>
              <input className='mr-3' type='checkbox' />
              <label className='pr-1'>E</label>
              <input className='mr-3' type='checkbox' />
            </div>
            <div className='text-end'>
              <Button className='' icon="pi pi-trash" onClick={() => deleteMachine(machine.id)} />
            </div>

          </div>
        ))}
      </div>


    </div>
  );
}

export default MachineManagement;





