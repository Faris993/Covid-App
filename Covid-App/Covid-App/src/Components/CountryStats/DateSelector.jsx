import React from "react";
import { DateInput, Label } from "./CountStat.style";

const DateSelector = ({ selectedDate, onDateChange }) => (
  <>
    <Label htmlFor="date-input">Select Date:</Label>
    <DateInput
      type="date"
      id="date-input"
      value={selectedDate}
      onChange={onDateChange}
    />
  </>
);

export default DateSelector;
