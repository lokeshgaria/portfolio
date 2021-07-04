import React from "react";
import {
  Grid,
  Container,
  Typography,
   
  Box,
   
} from "@material-ui/core";
import version from "./images/typing.svg";
import Image from "./Image";
import styled from "styled-components";

const Icons = [
  {
    name: "html",
    icon: "fab fa-html5",
  },
  {
    name: "css",
    icon: "fab fa-css3-alt",
  },
  {
    name: "javaScript",
    icon: "fab fa-js",
  },
  {
    name: "React",
    icon: "fab fa-react",
  },
  {
    name: "sass",
    icon: "fab fa-sass",
  },
  {
    name: "php",
    icon: "fab fa-php",
  },
];
function Skills() {
  return (
    <>
      <Container id="skills" >
        <Grid container spacing="2" justify="space-between">
          <Grid item lg={4} sm={6}>
            <Image src={version} />
          </Grid>
          <Grid item lg={6} sm={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                What I do? &nbsp;
              </Typography>
              <ContentSpan>
                CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH
                STACK.
              </ContentSpan>
              <ContentPoint>
                <span>
                  ⚡ Develop highly interactive Front end / User Interfaces for
                  your web applications
                </span>
                <MatIcons>
                  {Icons.map((logo) => (
                    <Icon>
                      <i className={logo.icon}></i>
                      <p>{logo.name}</p>
                    </Icon>
                  ))}
                </MatIcons>
              </ContentPoint>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Skills;

const ContentSpan = styled.span`
  color: #827b7b;
  font-size: 15px;
  letter-spacing: 0px;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 10px;
    text-align: center;
  }
`;

const ContentPoint = styled.div`
  font-weight: bolder;
  margin: 35px 0;

  @media (max-width: 768px) {
     font-size : 11px;
  }
  @media (max-width: 368px) {
     font-size : 7px;
  }
`;

const MatIcons = styled.div`
  margin: 33px 0;
  display: flex;
  align-self: center;
  justify-content: space-evenly;
`;

const Icon = styled.span`
  font-size: 2.5rem;
  color: #827b7b;
   text-align : center;
  p {
    margin: 6px 0;
    text-align:center;
    font-size: 15px;
  }
`;
