import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FutureDateCalculator() {
  const [numOfDays, setNumOfDays] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [futureDate, setFutureDate] = useState(null);

  const handleNumOfDaysChange = (event) => {
    const days = parseInt(event.target.value, 10);
    setNumOfDays(days);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (!isNaN(numOfDays) && date) {
      const futureDate = new Date(date);
      futureDate.setDate(date.getDate() + numOfDays);
      setFutureDate(futureDate);
    } else {
      setFutureDate(null);
    }
  };

  return (
    <div>
      <label>
        Number of Days:
        <input
          type="number"
          value={numOfDays}
          onChange={handleNumOfDaysChange}
          placeholder="Next Visit Date"
        />
      </label>
      <br />
      <label>
        Select a Date:
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Date"
        />
      </label>
      <br />
      {futureDate && (
        <div>
          <p>Future Date: {futureDate.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default FutureDateCalculator;