import "./Data.css";
import { useState } from "react";
import StudentData from "./StudentData";
const Data = (props) => {
  const [enteredEnrolmentNo, setEnteredEnrolmentNo] = useState(" ");
  const enrolmentChangeHandler = (event) => {
    setEnteredEnrolmentNo(event.target.value);
  };
  const filteredData = props.allData.filter((data) => {
    return data.enrolmentNo.toString() === enteredEnrolmentNo.toString();
  });

  const enSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredEnrolmentNo(" ");
  };

  return (
    <>
      <form className="main" onSubmit={enSubmitHandler}>
        <input
          onChange={enrolmentChangeHandler}
          type="number"
          className="enrolment-search"
          placeholder="Enter enrolment Number"
          min="1001"
          step="1.0"
          value={enteredEnrolmentNo}
          max="9999"
        />
        <button className="submit-button-en">Cancel</button>
      </form>
      {filteredData.map((d) => (
        <StudentData
          enrolmentNo={d.enrolmentNo}
          studentName={d.studentName}
          emailId={d.emailId}
        />
      ))}
    </>
  );
};
export default Data;
