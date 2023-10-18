import StudentData from "./StudentData";
const Data = (props) => {
  return (
    <>
      {props.allData.map((data) => (
        <StudentData
          studentName={data.studentName}
          studentAge={data.studentAge}
          emailId={data.emailId}
          enrolmentNo={data.enrolmentNo}
        />
      ))}
    </>
  );
};
export default Data;
