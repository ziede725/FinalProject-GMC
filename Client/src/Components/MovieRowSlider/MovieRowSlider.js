import {
  ThemeProvider,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { useRef } from "react";
import { theme } from "../../theme";
import MovieCard from "../MovieCard/MovieCard";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
`;
const CustomNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #eee;
  width: 70px;

  margin-right: 1rem;
  & > * :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const MovieRowSlider = ({ title, Movies }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const sliderRef = useRef();
  const nextClick = () => {
    sliderRef.current.slickNext();
  };
  const prevClick = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <ThemeProvider theme={theme}>
      ¨
      <Container maxWidth="lg" style={{ marginTop: "1rem" }}>
        <Top>
          <Typography variant="h4" color="secondary">
            {title}
          </Typography>
          <CustomNavigation>
            <IconButton style={{ color: "#eee" }}>
              <ArrowBackIosIcon
                ref={navigationPrevRef}
                onClick={(e) => prevClick()}
              />
            </IconButton>
            <IconButton style={{ color: "#eee" }}>
              <ArrowForwardIosIcon
                ref={navigationNextRef}
                onClick={(e) => nextClick()}
              />
            </IconButton>
          </CustomNavigation>
        </Top>
        <Slider {...settings} ref={sliderRef}>
          {/* {Movies&& Movies.map((el) => (
            <MovieCard img={el.img} id={el._id} key={el._id} /> */}
          {Movies.map((el) => (
            <MovieCard movieUrl={el.img} movieID={el._id} key={el._id} />
          ))}
        </Slider>
      </Container>
    </ThemeProvider>
  );
};

export default MovieRowSlider;
