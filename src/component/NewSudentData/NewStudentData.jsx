import DataSubmitForm from "./DataSubmitForm";
const NewStudentData = (props) => {
  const savedStudentData = (Data) => {
    const newData = {
      ...Data,
      id: Math.random().toString(),
    };
    props.onSaveData(newData);
  };

  return (
    <>
      <DataSubmitForm onSaveStudentData={savedStudentData} />
    </>
  );
};
export default NewStudentData;
