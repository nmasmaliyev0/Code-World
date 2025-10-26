import TeacherCard from "./TeacherCard";
import './TeachersSection.css';

const TeachersSection = () => {
  return (
    <section className="teachers-section">
      <div className="teachers-header">
        <h4 className="teachers-title">Müəllimlərimiz</h4>
        <img src="../public/arrow.png" alt="arrow" />
      </div>

      <div className="teachers-list">
        <TeacherCard
          imgSrc='../public/teacher1.jpg'
          name='James Bond'
          job='Qrafik Dizayner'
        />
        <TeacherCard
          imgSrc='../public/teacher2.png'
          name='Katniss Everdeen'
          job='Qrafik Dizayner'
        />
        <TeacherCard
          imgSrc='../public/teacher3.jpg'
          name='Jack Sparrow'
          job='Qrafik Dizayner'
        />
        <TeacherCard
          imgSrc='../public/teacher4.jpg'
          name='James Bond'
          job='Qrafik Dizayner'
        />
      </div>
    </section>
  )
}

export default TeachersSection;