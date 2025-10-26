import './CommentCard.css';

const CommentCard = ({ title, info, className }) => {
  return (
    <div className={`comment-card ${className}`}>
        <h5 className="comment-card-title">{title}</h5>
        <p className="comment-card-info">{info}</p>
    </div>
  )
}

export default CommentCard;