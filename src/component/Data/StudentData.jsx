import "./StudentData.css";
import noProfile from "../StudentPicture/noProfile.png";

const StudentData = (props) => {
  return (
    <div className="main-container">
      <div className="name-and-email">
        <div className="name-student">{props.studentName}</div>
        <div className="email-student">{props.emailId}</div>
      </div>
      <div className="enrolment-student">
        Enrollment Number : {props.enrolmentNo}
      </div>
      <div className="student-photo">
        <img src={noProfile} alt="NoImage" />
      </div>
    </div>
  );
};
export default StudentData;
