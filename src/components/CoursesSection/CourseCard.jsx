import './CourseCard.css';

const CourseCard = ({ title, logoSrc }) => {
  return (
    <div className="course-card">
      <div className="card-header">
        <h6 className="card-title">{title}</h6>
        <img src={logoSrc}
          alt="logo"
          className="card-logo"
        />
      </div>

      <img
        src="../public/line.png"
        alt="line"
        className="card-line"
      />

      <div className="card-content">
        <div className='content-header'>
          <p className='content-title'>Adobe Photoshop/ Illustrator</p>
          <p className='content-description'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
        </div>

        <div>
          <img src="../public/arrow.png" alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default CourseCard;