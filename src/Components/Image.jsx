import React from "react";
import styled from "styled-components";

const Image = ({ src }) => {
  return (
    <div>
      <ImageContainer>
        <img src={src} alt="img" />
      </ImageContainer>
 
    </div>
  );
};

export default Image;

const ImageContainer = styled.div`
 
 img{
   width : 100%
 }
  
`;
