import "./App.css";
import NewStudentData from "./component/NewSudentData/NewStudentData";

import Data from "./component/Data/Data";
import { useState } from "react";
const App = () => {
  const StaticStudentData = [
    {
      studentName: "Yesh Sharma",
      enrolmentNo: 7015,
      id: "d1",
      emailId: "yesh@gmail.com",
    },
    {
      studentName: "Pooja Sharma",
      enrolmentNo: 7016,
      id: "d2",
      emailId: "pooja@gmail.com",
    },
    {
      studentName: "Monika Swami",
      enrolmentNo: 7017,
      id: "d3",
      emailId: "monika@gmail.com",
    },
  ];
  const [dynamicData, setDynamicData] = useState(StaticStudentData);
  const saveData = (sData) => {
    setDynamicData((prevData) => {
      return [sData, ...prevData];
    });
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
