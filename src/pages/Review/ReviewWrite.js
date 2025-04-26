import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewWrite.css';

function ReviewWrite({ setReviews, reviews }) {
  const [photo, setPhoto] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  // 사진 업로드 핸들러
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 저장 버튼 클릭
  const handleSave = () => {
    const newReview = {
      id: Date.now(),
      photo,
      rating,
      content,
    };
    setReviews([newReview, ...reviews]);
    navigate('/reviews');
  };

  return (
    <div className="review-write-page">
      <div className="review-photo-upload">
        {photo ? (
          <img src={photo} alt="업로드된 사진" />
        ) : (
          <div className="photo-placeholder">여행지 사진</div>
        )}
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
      </div>
      <div className="review-rating-select">
        <span>별점 </span>
        {[1,2,3,4,5].map((num) => (
          <span
            key={num}
            className={rating >= num ? 'star selected' : 'star'}
            onClick={() => setRating(num)}
            style={{ cursor: 'pointer' }}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        className="review-content-input"
        placeholder="리뷰 내용"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <div className="review-write-actions">
        <button onClick={handleSave}>저장하기</button>
        <button onClick={() => navigate('/reviews')}>취소</button>
      </div>
    </div>
  );
}

export default ReviewWrite; 