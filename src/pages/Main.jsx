import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainAside from '../components/MainComponents/MainAside/MainAside';
import MainPosts from '../components/MainComponents/MainPosts';

const Main = () => {
  const [users, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://a40176c0-882f-4214-b7f8-2d43f9955ed5.mock.pstmn.io/posts')
      .then(res => res.json())
      .then(data => setPosts(data.postings));
    fetch('https://a40176c0-882f-4214-b7f8-2d43f9955ed5.mock.pstmn.io/users')
      .then(res => res.json())
      .then(data => setUser(data.users));
  }, [posts.title]);

  console.log(users);

  const recentPosts = posts.reverse();
  const recentFivePosts = recentPosts.slice(0, 5);

  return (
    <MainWrapper>
      <WidthSetting>
        <MainPosts recentPosts={recentPosts} />
        <MainAside usersName={users.name} recentFivePosts={recentFivePosts} />
      </WidthSetting>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 800px;
  margin: 80px 0px 150px 0px;
`;

const WidthSetting = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;
