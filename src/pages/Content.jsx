import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

const Content = () => {
  const { postId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/data/${postId}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [postId]);
  return (
    <ContentWrapper>
      <div>Content</div>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div``;
