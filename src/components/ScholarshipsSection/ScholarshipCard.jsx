import './ScholarshipCard.css';

const ScholarshipCard = ({ title, info }) => {
  return (
    <div className="scholarship-card">
      <div className="scholarship-card-header">
        <img
          src="/ux-logo-large.png"
          alt="ux-logo"
          className='ux-logo'
        />
        <img src="/arrow.png" alt="arrow" />
      </div>

      <div className="scholarship-card-content">
        <h5 className="scholarship-card-title">{title}</h5>
        <p className="scholarship-card-description">{info}</p>
      </div>
    </div>
  )
}

export default ScholarshipCard;