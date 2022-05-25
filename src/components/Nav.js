import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavWrapper>
      <PageTitle>Title</PageTitle>
      <SearchInput placeholder="글 제목을 검색하세요" />
      <NavRight>
        <p>로그인</p>
      </NavRight>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: skyblue;
`;

const PageTitle = styled.p``;
const SearchInput = styled.input``;
const NavRight = styled.div``;
