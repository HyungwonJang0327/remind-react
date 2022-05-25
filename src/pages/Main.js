import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <div>Main</div>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: tan;
`;
