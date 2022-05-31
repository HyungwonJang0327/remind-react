import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };
  const goLogin = () => {
    navigate('/login');
  };
  const goMyPage = () => {
    navigate('/mypage');
  };
  return (
    <NavWrapper>
      <PageTitle onClick={goMain}>꼬부기</PageTitle>
      <NavRight>
        <LoginBtn onClick={goLogin}>Login</LoginBtn>
        <LoginBtn onClick={goMyPage}>My Page</LoginBtn>
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
  background-color: white;
  border-bottom: 1px solid gray;
`;
const PageTitle = styled.p`
  font-size: 20px;
`;
const NavRight = styled.div``;
const LoginBtn = styled.button`
  border-style: none;
  background-color: transparent;
  margin-left: 20px;
`;
