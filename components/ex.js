function getWeekNumber(date){
    let currentDate = new Date(date)
startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) /
	(24 * 60 * 60 * 1000));

var weekNumber = Math.ceil(days / 7);	
    return weekNumber
}
getWeekNumber(new Date())
console.log(getWeekNumber('2023-09-27'));
let op = [
    {
      "Name": "name",
      "Age": "23",
      "Mobile": "1234512345",
      "Purpose": "Headpain",
      "Email": "vaithiselva223@gmail.com",
      "Date": "2023-10-01",
      "id": 11
    },
    {
      "Name": "dhana",
      "Age": "23",
      "Mobile": "7603806300",
      "Purpose": "Fever",
      "Email": "vaithiselva2@23gmail.com",
      "Date": "2023-09-23",
      "id": 12
    },
    {
      "Name": "thasa",
      "Age": "25",
      "Mobile": "9087656565",
      "Purpose": "Fever",
      "Email": "vaithiselva2@23gmail.com",
      "Date": "2023-09-24",
      "id": 13
    },
    {
      "Name": "thasa",
      "Age": "23",
      "Mobile": "7603806300",
      "Purpose": "Fever",
      "Email": "vaithiselva2@23gmail.com",
      "Date": "2023-09-27",
      "id": 14
    },
    {
      "Name": "selva kumar",
      "Age": "23",
      "Mobile": "7603806300",
      "Purpose": "Fever",
      "Email": "vaithiselva2@23gmail.com",
      "Date": "2023-09-30",
      "id": 15
    },
    {
      "Name": "thasa",
      "Age": "23",
      "Mobile": "7603806300",
      "Purpose": "Fever",
      "Email": "vaithiselva2@23gmail.com",
      "Date": "2023-09-30",
      "id": 16
    },
    {
      "Name": "thasa",
      "Age": "3",
      "Mobile": "7603806300",
      "Purpose": "Fever",
      "Email": "vaithiselva2@23gmail.com",
      "Date": "2023-10-01",
      "id": 17
    }
  ]

function lastWeek(){
   let currentweek =  getWeekNumber(new Date());
    let records = op.filter((ele)=>getWeekNumber(ele.Date) === currentweek-1);
    console.log(records)
}
function currentMonth(){
    let currentMonthNumber = new Date().getMonth();
    let records = op.filter((ele)=>{
        return new Date(ele.Date).getMonth() === currentMonthNumber
    });
    console.log(records)
}
lastWeek();
currentMonth()