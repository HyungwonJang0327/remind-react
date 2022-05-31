import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const MainPosts = ({ recentPosts }) => {
  const navigate = useNavigate();
  const goContent = () => {
    navigate(`/content/${recentPosts.id}`);
  };
  return (
    <MainPostsWrapper>
      <ShowWholeContents>전체 글 보기</ShowWholeContents>
      {recentPosts.map((post, idx) => (
        <PostWrapper key={idx}>
          <PostWrapperRight>
            <PostRight>{post.id}</PostRight>
            <PostRight onClick={goContent}>{post.title}</PostRight>
          </PostWrapperRight>
          <PostWrapperLeft>
            <PostLeft>{post.userName}</PostLeft>
            <PostLeft>{post.postingTime}</PostLeft>
            <PostLeft>{post.viewCount}</PostLeft>
          </PostWrapperLeft>
        </PostWrapper>
      ))}
      <SearchInput placeholder="글 제목을 검색하세요" />
    </MainPostsWrapper>
  );
};

export default MainPosts;

const MainPostsWrapper = styled.div`
  width: 65%;
`;

const ShowWholeContents = styled.div`
  padding: 15px;
  margin: 20px 0px;
  border-bottom: 1px solid blue;
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-bottom: 1px solid lightgray;
`;

const PostWrapperRight = styled.div`
  display: flex;
`;
const PostRight = styled.p`
  margin-right: 20px;
`;
const PostWrapperLeft = styled.div`
  display: flex;
`;

const PostLeft = styled.p`
  margin-left: 15px;
`;
const SearchInput = styled.input`
  border-style: none;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  border-bottom: 2px solid darkblue;
  &:focus {
    outline: none;
  }
`;
