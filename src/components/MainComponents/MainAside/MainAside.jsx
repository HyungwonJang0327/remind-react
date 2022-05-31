import React from 'react';
import styled from 'styled-components';
import AsideRecentPosts from './AsideRecentPosts';
import MainUserInfo from './MainUserInfo';

const MainAside = ({ usersName, recentFivePosts }) => {
  // console.log(usersName);
  return (
    <MainAsideWrapper>
      <div>MainAside</div>
      <MainUserInfo usersName={usersName} />
      <AsideRecentPosts recentFivePosts={recentFivePosts} />
    </MainAsideWrapper>
  );
};

export default MainAside;

const MainAsideWrapper = styled.div`
  width: 30%;
  border: 1px solid red;
`;
