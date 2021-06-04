import { ThemeProvider, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { Link as RouterLink } from "react-router-dom";
const CarouselItem = styled.div`
  position: relative;
  min-height: 350px;
  width: 100%;
  background: ${(props) => `url("http://localhost:7200/${props.background}") no-repeat top center`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2px;
`;
const CarouselItemContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5rem;
  color: #eeeeee;
`;

const ButtonsArea = styled.div`
  display: flex;
  width: auto;
  margin-top: 1.5rem;
`;
const TrailerButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  color: #eeeeee;
  width: fit-content;
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  margin-right: 1rem;
  transition: 0.2s ease-out;
  span {
    margin-right: 0.5rem;
  }
  &:hover {
    color: #ffbb00;
    transition: 0.2s ease-in;
  }
`;
const CallToAction = styled.button`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 2px;
  background-color: #eeeeee;
  cursor: pointer;
  margin-right: 1rem;
  transition: 0.2s ease-out;
  span {
    margin-right: 0.5rem;
    font-size: 1rem;
  }
  &:hover {
    background-color: #ffbb00;
    transition: 0.2s ease-in;
  }
`;

const MovieHero = ({ Movie }) => {
  // console.log(Movie?.img)
  return (
    <ThemeProvider theme={theme}>
      <CarouselItem 
      background={Movie?.img}
      >
        <CarouselItemContent>
          <>
            <Typography variant="h6">highlights</Typography>
            <Typography variant="h2">{Movie && Movie.title}</Typography>
            <Typography variant="h5">
              {Movie&&Movie.genres &&
                Movie.genres.map((genre, index) => (
                  <span key={index}> {genre.name} </span>
                ))}{" "}
              - {Movie && Movie.runTime}
            </Typography>
            <ButtonsArea>
              {Movie && Movie.trailerUrl && (
                <TrailerButton>
                  <Icon>play_circle_outline</Icon>
                  <span>
                    <a style={{ color: "white" }} href={Movie.trailerUrl}>
                      watch trailer
                    </a>
                  </span>
                </TrailerButton>
              )}
            </ButtonsArea>
          </>
          <>
            <Typography variant="p">{Movie && Movie.Overview}</Typography>
          </>
        </CarouselItemContent>
      </CarouselItem>
    </ThemeProvider>
  );
};

export default MovieHero;
