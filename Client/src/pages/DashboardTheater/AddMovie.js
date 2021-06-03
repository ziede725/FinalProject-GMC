import React from "react";
import {
  makeStyles,
  withStyles,
  Typography,
  Paper,
  Input,
} from "@material-ui/core";
import Image from "../../assets/lloyd-dirks-4SLz_RCk6kQ-unsplash.jpg";
import { Formik, Form } from "formik";
import CheckboxesGroup from "../../Components/Form/Checkbox";
import * as Yup from "yup";
import styled from "styled-components";
import { useState } from "react";
import { addMovie } from "../../Redux/Actions/movie.actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { object } from "yup/lib/locale";

const inputSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must contain more than 6 caracters !")
    .max(15)
    .required("Required"),
});
const StyledPaper = withStyles({
  root: {
    background: "#010916",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0%",
  },
})(Paper);
const styles = makeStyles({
  root: {
    backgroundColor: "#151f2e",
    color: "#a7aab0",
    width: "25%",
    paddingLeft: "4px",
    margin: "10px",
  },
  label: {
    textTransform: "capitalize",
  },
});

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "strech",
  },
  boxContainers: {
    width: "100%",
    height: "30%",
    margin: "0px",
  },
  boxFirstContainer: {
    height: "20%",
    width: "100%",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundOrigin: "contentBox",
    backgroundSize: "cover",
  },
  typographyClass: {
    marginLeft: "20px",
    color: "#a7aab0",
    marginBottom: "20px",
  },
  root: {
    color: "black",
    backgroundColor: "black",
  },
  containerClass: {
    display: "flex",
    flexDirection: "column ",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  flexRow2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  inputClass: {
    width: "100%",
    backgroundColor: "#151f2e",
    color: "#a7aab0",
    paddingLeft: "4px",
    marginBottom: "40px",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-around",
  },
  check: {
    width: "50%",
  },
}));
const WrapperMoviePage = styled.div`
  height: 100%;
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
`;
const StyledButton = styled.button`
  position: relative;
  width: 20%;
  margin-left: 35%;
  border: 0px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #fbc740;
    cursor: pointer;
  }
`;
const MoviePage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [runTime, setRunTime] = useState("");
  const [Language, setLanguage] = useState("");
  const [Overview, setOverview] = useState("");
  const [date, setDate] = useState("");
  const [distributor, setDistributor] = useState("");
  const [genres, setGenres] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const [file, setFile] = useState();
  const [state, setState] = React.useState({
    Thriller: false,
    Action: false,
    Drama: false,
    Historical: false,
    Comedy: false,
    Fantasy: false,
    Romance: false,
    Documentary: false,
    ScienceFiction: false,
    Adventure: false,
    CrimeAndMystery: false,
    ScienceFiction: false,
    Western: false,
    Horror: false,
    MusicalFilm: false,
    animation: false,
  });
  const send = () => {
    const data = new FormData();
    data.append("title", title);
    data.append("runTime", runTime);
    data.append("Language", Language);
    data.append("Overview", Overview);
    data.append("date", date);
    data.append("distributor", distributor);
    Object.keys(state).forEach((key) => data.append(key, state[key]));
    data.append("trailerUrl", trailerUrl);
    data.append("img", file);

    dispatch(addMovie(data));
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const {
    Thriller,
    Action,
    Drama,
    Historical,
    Comedy,
    Fantasy,
    Adventure,
    CrimeAndMystery,
    MusicalFilm,
    animation,
    Romance,
    Horror,
    Documentary,
    ScienceFiction,
    Western,
  } = state;

  const classe = styles();
  const classes = useStyles();

  return (
    <>
      <WrapperMoviePage>
        {/* <div className={classes.boxFirstContainer}>
        <Typography variant='h3' className={classes.typographyClass}>
             Add Movie Section 
        </Typography>
        </div> */}
        <StyledPaper>
          <div className={classes.containerClass}>
            <Typography variant="h3" className={classes.typographyClass}>
              Movie Details
            </Typography>
          </div>
          <div>
            <Formik validationSchema={inputSchema}>
              <Form>
                <div className={classes.flexRow}>
                  <Input
                    placeholder="Original title"
                    className={classe.root}
                    onChange={(e) => setTitle(e.target.value)}
                  ></Input>
                  <Input
                    placeholder="Run time "
                    className={classe.root}
                    onChange={(e) => setRunTime(e.target.value)}
                  ></Input>
                  <Input
                    placeholder="Language"
                    className={classe.root}
                    onChange={(e) => setLanguage(e.target.value)}
                  ></Input>
                  <Input
                    placeholder="Movie Overview"
                    className={classe.root}
                    onChange={(e) => setOverview(e.target.value)}
                  ></Input>
                  <Input
                    placeholder="Release Date"
                    className={classe.root}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                  />
                  <Input
                    placeholder="Distributor"
                    className={classe.root}
                    onChange={(e) => setDistributor(e.target.value)}
                  />
                  <div>
                    <CheckboxesGroup
                      className={classes.check}
                      state={state}
                      handleChange={handleChange}
                    />
                  </div>
                </div>
              </Form>
            </Formik>
          </div>

          <div>
            <div className={classes.flexRow2}>
              <div className={classes.flexColumn}>
                <Typography variant="h6" className={classes.typographyClass}>
                  Enter poster URL
                </Typography>
                <form enctype="multipart/form-data">
                  <input
                    placeholder="Choose Movie poster"
                    accept=".png"
                    className={classes.inputClass}
                    type="file"
                    name="img"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>
                </form>
              </div>
              <div className={classes.flexColumn}>
                <Typography variant="h6" className={classes.typographyClass}>
                  Enter Trailer URL
                </Typography>
                <Input
                  type="text"
                  placeholder="Trailer URL"
                  className={classes.inputClass}
                  onChange={(e) => setTrailerUrl(e.target.value)}
                ></Input>
              </div>
            </div>
          </div>
          <StyledButton onClick={send}>ADD MOVIE</StyledButton>
        </StyledPaper>
      </WrapperMoviePage>
    </>
  );
};
export default MoviePage;
