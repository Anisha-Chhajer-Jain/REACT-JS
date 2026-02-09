import './student.css'
function StudentCard({ student }) {
  return (
    <>
    <div className='box'>
      <h3>Name: {student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
    </div>
    </>
  );
}

export default StudentCard;