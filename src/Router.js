import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Contents from './pages/Contents';
import Content from './pages/Content';
import TextPosting from './pages/Posting/TextPosting';
import MediaPosting from './pages/Posting/MediaPosting';
import Manage from './pages/Manage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/content" element={<Content />} />
        <Route path="/textposting" element={<TextPosting />} />
        <Route path="/mediaposting" element={<MediaPosting />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
