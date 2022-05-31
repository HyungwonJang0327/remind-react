import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Content from './pages/Content';
import Posting from './pages/Posting';
import Manage from './pages/Manage';
import FilteredPosts from './pages/FilteredPosts';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/content/:postId" element={<Content />} />
        <Route path="/filteredposts" element={<FilteredPosts />} />
        <Route path="/textposting" element={<Posting />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
