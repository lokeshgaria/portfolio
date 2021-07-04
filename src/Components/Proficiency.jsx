import React from "react";
import {Grid,Container, Typography, Box,LinearProgress,withStyles,} from "@material-ui/core";
import styled from "styled-components";

const ProgressData = [
  {
    name: "FrontEnd / Design",
    value: 90,
  },
  {
    name: "Backend",
    value: 60,
  },
  {
    name: "Programming",
    value: 78,
  },
];

 
const Proficiency = () => {
  return (
    <Container>
    <Typography variant="h4">Proficiency</Typography>
    <Box pt={3} pb={13} >
    
      <Grid container >
        {ProgressData.map((bar) => (
          <Grid item lg={12} xs={12}>
            <Box mt={2}>
              <ProfDiv>
                <p id="prificiency">{bar.name}</p>
                <BorderLinearProgress variant="determinate" value={bar.value} />
              </ProfDiv>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
 
    </Container>
  );
};

export default Proficiency;
const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    borderRadius: 20,
    marginTop: 11,
    marginBottom: 11,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c",
  },
})(LinearProgress);

const ProfDiv = styled.div`
 p{
     font-weight : 600;
     color : #827b7b;
 }
`;
