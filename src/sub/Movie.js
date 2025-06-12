import React from 'react';
import ProtoTypes from 'prop-types'; //데이터 타입 검사
import { Link } from 'react-router-dom';

function Movie({ poster, title, year, genres, summary, rating }) {
  return (
    <article className="movie-card">
      {/* 전체를 Link로 감싸 클릭 시 "movieDetail"로 이동 */}
      <Link
        to="/movieDetail"
        state={{ poster, title, year, genres, summary, rating }}
        className="movie-link"
      >
        {/* 포스터 (146×216) */}
        <img className="poster" src={poster} alt={title} />

        {/* 정보 박스 (795×262) */}
        <div className="info">
          <h2>{title}</h2>
          <p className="year">{year}</p>
          <p className="genre">{genres.join(' · ')}</p>
           {/* ★★★ 평점 표시 추가 ★★★ */}
           <p className="rating">⭐ {rating}</p>
          {/* 줄거리는 200자 이상 시 생략기호 */}
          <p className="desc">{summary.slice(0, 200)}...</p>
        </div>
      </Link>
    </article>
  );
}

Movie.ProtoTypes = {
  id: ProtoTypes.number.isRequired,
  year: ProtoTypes.number.isRequired,
  title: ProtoTypes.string.isRequired,
  summary: ProtoTypes.string.isRequired,
  poster: ProtoTypes.string.isRequired,
  genres: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
}

export default Movie;
