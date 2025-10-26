import CommentCard from "./CommentCard";
import './FeedbackSection.css';

const FeedbackSection = () => {
  return (
    <section className="feedback-section">
      <div className="feedback-header">
        <h4 className="feedback-header-title">Tələbələrimizin rəyləri</h4>
        <img src="../arrow.png" alt="arrow" />
      </div>

      <div className="feedback-content">
        <div>
          <img
            src="../feedback-img.png"
            alt="feedback-image"
            className="feedback-img"
            />
        </div>

        <div className="comments-list">
          <CommentCard
            title='Vesper'
            info='Lorem ipsum dolor sit amet consectetur
                  adipiscing elit quisque faucibus. Lorem
                  ipsum dolor sit amet consectetur adipiscing
                  elit quisque faucibus.Lorem ipsum dolor sit
                  amet consectetur adipiscing elit quisque faucibus.'
            className='selected'
          />
          <CommentCard
            title='Vesper'
            info='Lorem ipsum dolor sit amet consectetur adipiscing
                  elit quisque faucibus. Lorem ipsum dolor sit amet
                  consectetur adipiscing elit quisque faucibus.Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet
                  consectetur adipiscing elit quisque faucibusconsectetur
                  adipiscing elit quisque faucibus.'
          />
          <CommentCard
            title='Vesper'
            info='Lorem ipsum dolor sit amet consectetur adipiscing
                  elit quisque faucibus. Lorem ipsum dolor sit amet
                  consectetur adipiscing elit quisque faucibus.Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet
                  consectetur adLorem ipsum dolor sit amet consectetur
                  adipiscing elit quisque faucibus.ipiscing elit quisque
                  faucibusconsectetur adipiscing elit quisque faucibus.'
          />
          <CommentCard
            title='Vesper'
            info='Lorem ipsum dolor sit amet consectetur adipiscing
                  elit quisque faucibus. Lorem ipsum dolor sit amet
                  consectetur adipiscing elit quisque faucibus.Lorem
                  ipsum dolor sit amet e faucibus.'
          />
          <CommentCard
            title='Vesper'
            info='Lorem ipsum dolor sit amet consectetur adipiscing
                  elit quisque faucibus. Lorem ipsum dolor sit amet
                  consectetur adipiscing elit quisque faucibus.Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet
                  consectetur adipiscing elit quisque faucibusconsectetur
                  adipiscing elit quisque faucibus.'
          />
          <CommentCard
            title='Vesper'
            info='Lorem ipsum dolor sit amet consectetur adipiscing
                  elit quisque faucibus. Lorem ipsum dolor sit amet
                  consectetur adipiscing elit quisque faucibus.Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
                  adLorem ipsum dolor sit amet consectetur adipiscing elit
                  quisque faucibus.ipiscing elit quisque faucibusconsectetur
                  adipiscing elit quisque faucibus.'
          />
          <CommentCard
            title='Vesper'
            info='Lorem ipsum dolor sit amet consectetur adipiscing
                  elit quisque faucibus. Lorem ipsum dolor sit amet consectetur
                  adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet
                  Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                  faucibusconsectetur adipiscing elit quisque faucibus.'
          />
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection;