import "./App.css";
import NewStudentData from "./component/NewSudentData/NewStudentData";

import Data from "./component/Data/Data";
import { useState } from "react";
const App = () => {
  const StaticStudentData = [
    {
      studentName: "Yesh Sharma",
      enrolmentNo: 7015,
      emailId: "yesh@gmail.com",
    },
    {
      studentName: "Pooja Sharma",
      studentAge: 20,
      enrolmentNo: 8851,
      emailId: "pooja@gmail.com",
    },
    {
      studentName: "Monika Swami",
      studentAge: 21,
      enrolmentNo: 4586,
      emailId: "monika@gmail.com",
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
