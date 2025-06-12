import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/App.css';

import Header from './component/Header';
import Main   from './component/Main';
import Intro  from './sub/Intro';
import Api   from './sub/Api';
import Contact   from './sub/Contact';
import NotFound from './sub/NotFound';
import Footer from './component/Footer';
import MovieDetail from './sub/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      {/* 사이드바(로고+네비)는 Header 한 곳에서만 렌더링 */}
      <div className="app-container">
      <Header />
    
    <div className="content">
      <Routes>
        <Route path='/React-MovieAPI2025'      element={<Main />}   />
        <Route path='/movieDetail' element={<MovieDetail /> } />
        <Route path='/intro' element={<Intro />}  />
        <Route path='/Api'  element={<Api />}   />
        <Route path='/Contact'  element={<Contact />}   />
        <Route path='*'      element={<NotFound />} />
      </Routes>
      </div>

      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
