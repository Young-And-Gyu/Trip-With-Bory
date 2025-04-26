import React from 'react';
import './ReviewCard.css';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-photo">
        {review.photo ? (
          <img src={review.photo} alt="여행지 사진" />
        ) : (
          <div className="photo-placeholder">여행지 사진</div>
        )}
      </div>
      <div className="review-rating">
        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
      </div>
      <div className="review-content">
        {review.content.length > 20 ? review.content.slice(0, 20) + '...' : review.content}
      </div>
    </div>
  );
}

export default ReviewCard; 