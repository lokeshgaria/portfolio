import React from "react";
import "./Project.css";
import {
  Grid,
  Container,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
 
} from "@material-ui/core";
//projects images
import amazon from "./images/amazon.png";
import covid1 from "./images/covidHard.png";
import redclifee from "./images/screenshot.png"
import covid2 from "./images/covidEasy.png";
import Practise from "./images/react.png";
import bgmi from "./images/bgmi.png";
import discord from "./images/discord.png"
import tesla from "./images/tesla.png";
import styled from "styled-components";

//project array data
const ProjectData = [
 
  {
    title: "Redcliffelabs",
    subtitle: "Live Project",
    content: "Redcliffe Labs is one of the best diagnostic centres & diagnosis labs in India that provides Full body Checkup .",
    image: redclifee,
    url : "https://redcliffelabs.com/",
  },
  {
    title: "Amazon",
    subtitle: "Clone",
    content: "A full E-commerce experience: the frontend I developed with React and using Context API to manage state.",
    image: amazon,
    url : "https://kind-brattain-d9ca3a.netlify.app",
  },
  {
    title: "Covid-19 ",
    subtitle: "Tracker -v1",
    content: "In this Project, I’ve created a COVID-19 Tracker/Stats Application.   used React with the addition of Charts.js, Material UI, and many different modules. ",
    image: covid2,
    url : "https://thirsty-euler-0ad442.netlify.app",
  },
  {
    title: "Covid-19 ",
    subtitle: "Tracker ",
    content: "In this Project, I’ve created a COVID-19 Tracker/Stats Application.   used React with the addition of Charts.js, Material UI, and many different modules. ",
    image: covid1,
    url : "https://sad-mcnulty-c8e128.netlify.app",
  },
  {
    title: "Practise ",
    subtitle: "Project",
    content: " used React Hooks and React Router for this beginner React JS Project. The website is fully responsive as well. Feel free to refactor the code and send me your versions!",
    image: Practise,
    url : "https://frosty-bohr-1bdc24.netlify.app",
  },
  {
    title: "Tesla",
    subtitle: "Landing-page",
    content: " Built the Tesla Clone with ReactJS (Redux + Styled Components)!",
    image: tesla,
    url : "https://teslaclonereact.netlify.app/",
  },
  {
    title: "PUBG",
    subtitle: "web Clone",
    content: "Built the Battlegrounds Mobile India website clone using React",
    image: bgmi,
    url : "https://bgmiclone.netlify.app/",
  },
  {
    title: "Discord",
    subtitle: "Clone",
    content: "Created Discord clone using React , Redux-toolkit with firebase for database management ",
    image: discord,
    url : "https://discord-clone-e8161.web.app/",
  },
];
const Pojects = () => {
  return (
    <Container id="projects">
      <Typography variant="h4">My Projects</Typography>
      <Box pt={3} pb={13}>
       <ContainerProject>
       <Grid container spacing="2">
          {ProjectData.map((project) => (
            <Grid item lg={3}>
              <Card className="cardcontianer" >
                <CardActionArea  >
                  <CardMedia
                    component="img"
                    alt={project.title}
                    height="240"
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <TitlleColor>{project.title}</TitlleColor> - {project.subtitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="projectTypo"
                    >
                       {
                           project.content
                       }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>

                  <a href={project.url} target="ads" >
                  <Button size="small" color="primary"  >
                    View Project
                  </Button>
                  </a> 
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
       </ContainerProject>
        
      </Box>
    </Container>
  );
};

export default Pojects;

const TitlleColor = styled.span`
  color: #ec615b;
`;

const ContainerProject = styled.div `
 
 display: flex;
 
`;