import ScholarshipCard from "./ScholarshipCard";
import './ScholarshipsSection.css';

const ScholarshipsSection = () => {
  return (
    <section className="scholarships-sections">
      <div className="scholarships-header">
        <h4 className="scholarships-header-title">
          Təqaüdlər
        </h4>
        <img src="../public/arrow.png" alt="arrow" />
      </div>

      <div className="scholarships-content">
        <img
          src="../public/line2.png"
          alt="line"
          className="line"
          />

        <div className="scholarships-list">
          <ScholarshipCard
            title='Akademik   Təqaüd'
            info='Yüksək nəticə göstərən və tədrisdə fəallığı
                  ilə seçilən tələbələrə təqdim olunur.'
          />
          <ScholarshipCard
            title='Sosial Dəstək Təqaüdü'
            info='Maddi imkanı məhdud olan, lakin öyrənmək
                  həvəsi güclü olan tələbələr üçün nəzərdə
                  tutulub.'
          />
          <ScholarshipCard
            title='Erkən Qeydiyyat Endirimi'
            info='Semestr başlamazdan əvvəl qeydiyyatdan
                  keçən tələbələr üçün xüsusi endirimlər
                  tətbiq olunur.'
          />
          <ScholarshipCard
            title='Qızlar üçün IT Dəstəyi Proqramı'
            info='Texnologiya və dizayn sahəsində təhsil
                  alan xanım tələbələr üçün qismən təqaüd
                  imkanı yaradır.'
          />
        </div>

        <img
          src="../public/line2.png"
          alt="line"
          className="line"
          />
        <button className="scholarships-btn">
          İndi müraciət et
        </button>
      </div>
    </section>
  )
}

export default ScholarshipsSection;