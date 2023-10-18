import StudentData from "./StudentData";
const Data = (props) => {
  return (
    <>
      <StudentData allD={props.allData[0]} />
      <StudentData allD={props.allData[1]} />
      <StudentData allD={props.allData[2]} />
    </>
  );
};
export default Data;
