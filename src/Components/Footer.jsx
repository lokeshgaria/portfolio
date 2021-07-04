import React ,  {useState , useEffect} from "react";
import {  Container,  Box, Button } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import styled from "styled-components";

const Footer = () => {
  const [position, setposition] = useState();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handelScroll = (scroll) =>{
    if(scroll > 500){
      setposition(true);
    }
    else{
      setposition(false)
    }
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", (event) => {
      var scroll = window.pageYOffset ;
       
      handelScroll(scroll);
  });
  } , []);
   
  
  

  return (
    <>
      <Container>
        <Box pt={7}>
          <FooterText>
            🚀 learning never ends. To infinity and beyond
            <span>copyright to lokeshgaria , {new Date().getFullYear()}</span>
            {
              position ? (
              <ScrollButton>
                <Button variant="contained" onClick={scrollTop}>
                  <ExpandLessIcon />
                </Button>
              </ScrollButton>
            ) : null}
          </FooterText>
        </Box>
      </Container>
    </>
  );
};

export default Footer;

const FooterText = styled.div`
  font-family: lato;
  font-weight: 600;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  span {
    color: #827b7b;
    font-size: 16px;
    margin: 11px 3px;
  }

  @media (max-width: 768px) {
    font-size: 15px;

    span {
      
      font-size: 13px;
      margin: 11px 3px;
    }
  }
`;
const ScrollButton = styled.div`
  position: fixed;
  top: 89%;
  left: 92%;

  @media (max-width: 768px) {
    left: 80%;
  }
`;
