import './TeacherCard.css';

const TeacherCard = ({ imgSrc, name, job }) => {
  return (
    <div className="teacher-card">
      <img
        src={imgSrc}
        alt="teacher image"
        className="teacher-img"
      />

      <div className="teacher-description">
        <h6 className="teacher-name">{name}</h6>
        <p className="teacher-job">{job}</p>
      </div>
    </div>
  )
}

export default TeacherCard;