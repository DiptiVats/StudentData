import { useState } from "react";
import "./DataSubmitForm.css";
const DataSubmitForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredEnrolmentNo, setEnteredEnrolmentNo] = useState("");
  const [enteredEmailId, setEnteredEmailId] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const enrolmentNoChangeHandler = (event) => {
    setEnteredEnrolmentNo(event.target.value);
  };
  const emailIdChangeHandler = (event) => {
    setEnteredEmailId(event.target.value);
  };
  const dataSubmitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      studentName: enteredName,
      studentAge: enteredAge,
      enrolmentNo: enteredEnrolmentNo,
      emailId: enteredEmailId,
    };
    props.onSaveStudentData(enteredData);
    setEnteredName("");
    setEnteredEmailId("");
    setEnteredAge("");
    setEnteredEnrolmentNo("");
  };
  return (
    <>
      <form onSubmit={dataSubmitHandler}>
        <div className="data-container">
          <span className="name">
            <label className="name-label">Enter Your Name </label>
            <input
              value={enteredName}
              type="text"
              className="student-name"
              onChange={nameChangeHandler}
              required
            />
          </span>
          <span className="age">
            <label className="age-label">Enter Your Age </label>
            <input
              value={enteredAge}
              type="number"
              className="student-age"
              onChange={ageChangeHandler}
            />
          </span>
          <span className="enrolment-no">
            <label className="enrolment-label">Enrolment Number </label>
            <input
              value={enteredEnrolmentNo}
              type="number"
              className="student-enrolment"
              onChange={enrolmentNoChangeHandler}
              required
            />
          </span>
          <span className="email-id">
            <label className="email-label">Enter Your Email </label>
            <input
              value={enteredEmailId}
              type="email"
              className="student-email"
              onChange={emailIdChangeHandler}
              required
            />
          </span>
          <div className="button">
            <button type="submit" className="submit-buttom">
              Add Record !
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default DataSubmitForm;
