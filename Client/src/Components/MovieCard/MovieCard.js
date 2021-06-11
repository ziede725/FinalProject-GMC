import React from "react";
import styled from "styled-components";

import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
const Card = styled.div`
  background-color: #eeeeee;
  width: 90%;

  height: 320px;
  border-radius: 0.5rem;
  overflow: hidden;
  background: ${(props) => `url("/${props.background}") no-repeat top center`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 9px 16px rgba(0, 0, 0, 0.08);
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.85) 53%,
    rgba(0, 0, 0, 0.8) 100%
  );
  transition: 0.2s;
  &:hover {
    opacity: 1;
    transition: 0.2s;
  }
`;

const MovieCard = ({ movieUrl, movieID }) => {
  return (
    <Card background={movieUrl}>
      <RouterLink to={`/movie/${movieID}`}>
        <Content>
          <div style={{ margin: "1rem" }}>
            <Typography
              gutterBottom
              color="textPrimary"
              style={{ width: "100%" }}
              variant="h5"
            >
             Book show 
            </Typography>
          </div>
          <div style={{ margin: "1rem" }}>
            <Typography
              paragraph
              color="textPrimary"
              style={{ width: "100%" }}
              variant="h5"
            ></Typography>
          </div>
        </Content>
      </RouterLink>
    </Card>
  );
};

export default MovieCard;
