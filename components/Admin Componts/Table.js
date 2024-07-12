
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios"
import './Table.css'

export default function PaginatorBasicDemo() {
    const [filteredData, setFilteredData] = useState([]);
    
    //normal api 
  
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3007/op")
        .then((res)=>{
            setdata(res.data) 
             setFilteredData(res.data);
           
        })
        .catch(()=>{
            setdata([])
            setFilteredData([]);
        })
    },[])



    function getWeekNumber(date){
        let currentDate = new Date(date)
     let startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));
    
    var weekNumber = Math.ceil(days / 7);	
        return weekNumber
    }

  

    /// yesterday button function
    function yesterday(){
          
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const timeChange=yesterday.getFullYear() + "-"+ parseInt(yesterday.getMonth()+1) +"-"+yesterday.getDate();
        let dayafter = data.filter((item)=> item.Date === timeChange)
        setFilteredData(dayafter)
   
     
    }



    function lastWeek(){
        let currentweek =  getWeekNumber(new Date());
         let records = data.filter((ele)=>getWeekNumber(ele.Date) === currentweek-1);
         setFilteredData(records)
     }




     function currentMonth(){
        let currentMonthNumber = new Date().getMonth();
        let records = data.filter((ele)=>{
            return new Date(ele.Date).getMonth() === currentMonthNumber
        });
        setFilteredData(records)
    }
    return (
        
        <div className='avatar'>
            <div className='three'>
                <button className='databtn' onClick={yesterday} >Yesterday</button>
                <button className='databtn' onClick={lastWeek}>Last Week</button>
                <button className='databtn' onClick={currentMonth}>Current Month</button>
            </div>
            <DataTable className='table' value={filteredData}  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="No" style={{ width: '10%' }}></Column>
                <Column field="Date" header="Date" style={{ width: '20%' }}></Column>
                <Column field="Name" header="Name" style={{ width: '20%' }}></Column>
                <Column field="Purpose" header="Purpose" style={{ width: '20%' }}></Column>
                <Column field="Age" header="Age" style={{ width: '5%' }}></Column>
                <Column field="Mobile" header="Mobile" style={{ width: '20%' }}></Column>
                <Column field="Email" header="Email id" style={{ width: '20%' }}></Column>
            </DataTable>
            
        </div>
    );
}
        