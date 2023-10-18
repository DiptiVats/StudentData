import "./StudentData.css";
const StudentData = (props) => {
  return (
    <div className="main-container">
      <div className="name-and-email">
        <div className="name-student">{props.allD.studentName}</div>
        <div className="email-student">{props.allD.emailId}</div>
      </div>
      <div className="enrolment-student">
        Enrollment Number : {props.allD.enrolmentNo}
      </div>
      <div className="student-photo">
        <img src={props.allD.studentImage} alt="NoImage" />
      </div>
    </div>
  );
};
export default StudentData;
