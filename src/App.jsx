import "./App.css";
import NewStudentData from "./component/NewSudentData/NewStudentData";
import StudentPicture4 from "./component/StudentPicture/StudentPicture4.jpg";
import StudentPicture1 from "./component/StudentPicture/StudentPicture1.png";
import StudentPicture3 from "./component/StudentPicture/StudentPicture3.png";
import Data from "./component/Data/Data";
import { useState } from "react";
const App = () => {
  const StaticStudentData = [
    {
      studentName: "Yesh Sharma",
      enrolmentNo: 7015,
      emailId: "yesh@gmail.com",
      studentImage: StudentPicture4,
    },
    {
      studentName: "Pooja Sharma",
      studentAge: 20,
      enrolmentNo: 8851,
      emailId: "pooja@gmail.com",
      studentImage: StudentPicture3,
    },
    {
      studentName: "Monika Swami",
      studentAge: 21,
      enrolmentNo: 4586,
      emailId: "monika@gmail.com",
      studentImage: StudentPicture1,
    },
  ];
  const [dynamicData, setDynamicData] = useState(StaticStudentData);
  const saveData = (sData) => {
    setDynamicData((prevData) => {
      return [sData, ...prevData];
    });
    console.log(saveData);
  };
  return (
    <>
      <center>
        <div className="student-registration">Student Record</div>
      </center>
      <NewStudentData onSaveData={saveData} />
      <Data allData={dynamicData} />
    </>
  );
};
export default App;
