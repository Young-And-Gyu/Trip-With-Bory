import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard';
import './ReviewList.css';

function ReviewList({ reviews }) {
  const navigate = useNavigate();

  return (
    <div className="review-list-page">
      <h2>리뷰</h2>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} onClick={() => navigate(`/reviews/${review.id}`)}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
      <button className="write-btn" onClick={() => navigate('/reviews/new')}>글쓰기</button>
    </div>
  );
}

export default ReviewList; 