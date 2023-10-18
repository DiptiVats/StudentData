import DataSubmitForm from "./DataSubmitForm";
const NewStudentData = (props) => {
  const savedStudentData = (Data) => {
    const newData = {
      ...Data,
      id: Math.random().toString(),
    };
    console.log(newData);
    props.onSaveData(newData);
  };

  return (
    <>
      <DataSubmitForm onSaveStudentData={savedStudentData} />
    </>
  );
};
export default NewStudentData;
