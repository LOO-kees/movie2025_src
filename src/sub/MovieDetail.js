import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/MovieDetail.css';    
import { Link } from 'react-router-dom';     

function MovieDetail() {
  /* Link(state) 로 넘어온 영화 정보 수신 --------------------- */
  const { state } = useLocation();           // {poster, title, year, genres, summary, rating}
  const navigate  = useNavigate();

  /* state 가 없으면 메인으로 리다이렉트 (새로고침 등 대비) */
  if (!state) {
    navigate('/');
    return null;
  }
  const { poster, title, year, genres, summary, rating } = state;
  /* -------------------------------------------------------- */

  return (
    <section className="movie-detail">
      {/* 포스터 */}
      <div className="detail-poster">
        <img src={poster} alt={title} />
      </div>

      {/* 정보 */}
      <div className="detail-info">
        <h2>{title}</h2>
        <p className="year">{year}</p>
        <p className="genre">{genres.join(' · ')}</p>
        <p className="rating">⭐ {rating}</p>
        <p className="desc">{summary}</p>
        <Link to='/React-MovieAPI2025'>
         <button className='btnToMain'>목록으로</button>
        </Link>
      </div>
    </section>
  );
}

export default MovieDetail;
