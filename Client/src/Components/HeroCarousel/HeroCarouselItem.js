import { ThemeProvider, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
const CarouselItem = styled.div`
  position: relative;
  min-height: 350px;
  width: 100%;

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

const HeroCarouselItem = ({ isActive, movie }) => {
  return (
    <ThemeProvider theme={theme}>
      <CarouselItem
        style={{
          backgroundImage: `url('${movie.img}')`,
        }}
      >
        <CarouselItemContent>
          <>
            <Typography variant="h6">highlights</Typography>
            <Typography variant="h2">{movie.title}</Typography>
            <Typography variant="h5">
              {movie.genres&& movie.genres.map((genre, index) => (
                <span key={index}> {genre.name} </span>
              ))}{" "}
              - {movie.runTime}
            </Typography>
            <ButtonsArea>
              <TrailerButton>
                <Icon>play_circle_outline</Icon>
                <span>
                  <a style={{ color: "white" }} href={movie.trailerUrl}>
                    watch trailer
                  </a>
                </span>
              </TrailerButton>
              <CallToAction>
                <span>book now !</span>
                <ConfirmationNumberOutlinedIcon />
              </CallToAction>
            </ButtonsArea>
          </>
        </CarouselItemContent>
      </CarouselItem>
    </ThemeProvider>
  );
};

export default HeroCarouselItem;
