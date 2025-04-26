import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReviewList from './pages/Review/ReviewList';
import ReviewWrite from './pages/Review/ReviewWrite';
import ReviewDetail from './pages/Review/ReviewDetail';
import './App.css';

function App() {
  // 리뷰 목록 상태 (id, 사진, 별점, 내용)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      photo: '',
      rating: 5,
      content: '정말 멋진 여행지였어요!',
    },
    {
      id: 2,
      photo: '',
      rating: 4,
      content: '가족과 함께 좋은 추억을 만들었습니다.',
    },
  ]);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/reviews" />} />
          <Route path="/reviews" element={<ReviewList reviews={reviews} />} />
          <Route path="/reviews/new" element={<ReviewWrite setReviews={setReviews} reviews={reviews} />} />
          <Route path="/reviews/:id" element={<ReviewDetail reviews={reviews} setReviews={setReviews} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
