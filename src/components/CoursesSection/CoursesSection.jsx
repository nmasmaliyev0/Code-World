import CourseCard from "./CourseCard";
import './CoursesSection.css';

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="courses-header">
        <h4 className="courses-title">Kurslarımız</h4>
        <img
          src="../public/arrow.png"
          alt="arrow"
          className="courses-arrow"
        />
      </div>

      <div className="courses-cards-list">
        <CourseCard
          title='Qrafik Dizayn'
          logoSrc='../public/graphic-logo.png'
        />
        <CourseCard
          title='UX/UI Dizayn'
          logoSrc='../public/ux-logo.png'
        />
        <CourseCard
          title='Frontend'
          logoSrc='../public/front-logo.png'
        />
        <CourseCard
          title='Backend'
          logoSrc='../public/sql-logo.png'
        />
        <CourseCard
          title='Data Analitika'
          logoSrc='../public/data-logo.png'
        />
        <CourseCard
          title='QA'
          logoSrc='../public/qa-logo.png'
        />
      </div>
    </section>
  )
}

export default CoursesSection;