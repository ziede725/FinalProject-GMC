const ErrorHandler = require("../helpers/errorHandler");
const Movie = require("../models/Movie");
const Genre = require("../models/Genre");
const mongoose = require("mongoose");
const { response } = require("express");
var _ = require("lodash");

// NOT SURE IF REQUIRED AS A METHOD
// FOR testing purposes
const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find({}).populate("genres");
    if (!movies) {
      throw new ErrorHandler(404, "There are no movies in the database ");
    }
    res.status(200).json({
      success: true,
      message: "Movies fetched from database !",
      movies,
    });
  } catch (error) {
    next(error);
  }
};

// Fetch one movie by name (FOR TESTING)
const getMovieByName =async (req,res,next)=>{
    const movieTitle = req.body.original_title 
    try {
        const movie = await Movie.findOne({movieInfos:{original_title: movieTitle}}) ; 
        if(!movie){
            throw new ErrorHandler('404','There are no movies with this title in the database ')
        }
       console.log(movie)
        res.status(200).json({
            success: true , 
            message : 'Here is the list of movies' , 
            movie 
        })
       
    }
    catch(error){
        next(error) ; 
    }
}
const createMovie = async(req,res,next)=>{
      const {title,runTime,Language,Overview,date,distributor,Thriller, Action, Drama,Historical,Comedy,Fantasy,
        Romance,Documentary, ScienceFiction , Adventure , CrimeAndMystery , Western,Horror,
        MusicalFilm,animation,trailerUrl} =req.body
     const genres ={Thriller, Action, Drama,Historical,Comedy,Fantasy,
        Romance,Documentary, ScienceFiction , Adventure , CrimeAndMystery , Western,Horror,
        MusicalFilm,animation}
        
        console.log(req.file)
   
    try{
        
        const filterGenres = Object.entries(genres).filter(el=> el[1]==="true" ) ; 
        // const doc = await Genre.findOne({name:"Documentary"}) ; 
        // console.log(doc)
        const genresID= await Promise.all(filterGenres.map( async el => await Genre.findOne({name:el[0]}).then(res=>res)))
       
        const id=genresID.map(el=>el._id)

        // genresID.map(el=> {mongoose.Types.ObjectId(el)
        // console.log(mongoose.Types.ObjectId(el))})

        const body = {title,runTime,Language,Overview,date,genres:id,distributor,trailerUrl,img:req.file.path}
        console.log(body)
        const newMovie =  await Movie.create(body) ;
       
        if (!newMovie){
            throw new ErrorHandler(500 , 'Movie has not been created ')
        } 
        
        id.map( async el=>{
           try{
                 await Genre.findByIdAndUpdate(el,{$addToSet : {movieId:newMovie._id}})
           }
           
            catch(err){
                console.log(err)
            }
          
       }) 
      
        res.status(200).json({
            success: true , 
            message : 'Movie creation has been successful' , 
            newMovie ,
        })
    }
   
  
   catch (error) {
    next(error);
  }
};


const editMovie = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const { reviews } = req.body;
  let editedMovie = {};
  try {
    console.log(id);
    const movieID = mongoose.Types.ObjectId(id);
    console.log(movieID);
    const movie = await Movie.findById(movieID);
    console.log("hello");
    if (reviews) {
      editedMovie = await Movie.findByIdAndUpdate(movieID, { $push: reviews });
    } else {
      editedMovie = await Movie.findByIdAndUpdate(
        movieID,
        { $set: body },
        { new: true }
      );
    }

    if (!editedMovie) {
      throw new ErrorHandler(404, "There is no such movie in the database ");
    }

    const ancientGenres = movie.genres;
    const newGenres = editedMovie.genres;

    ancientGenres.map(async (element) => {
      !newGenres.includes(element) &&
        (await Genre.findByIdAndUpdate(element, {
          $pull: { movieId: id },
        }).exec());
    });

    newGenres.map(async (element) => {
      !ancientGenres.includes(element) &&
        (await Genre.findByIdAndUpdate(element, { $push: { movieId: id } }));
    });

    res.status(200).json({
      success: true,
      message: "Movie edited successfully ",
      editedMovie,
    });
  } catch (error) {
    next(error);
  }
};
const deleteMovie = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      throw new ErrorHandler(
        404,
        "There is no movie to delete in the first place"
      );
    }

    deletedMovie.movieInfos.genres.map(async (element) => {
      const y = await Genre.findByIdAndUpdate(element, {
        $pull: { movieId: id },
      });
    });

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully ",
      deletedMovie,
    });
  } catch (error) {
    next(error);
  }
};
const getMoviesByGenre = async (req, res, next) => {
  const genresIDS = req.body.id;
  let x = [];
  try {
    Genre.find()
      .where("_id")
      .in(genresIDS)
      .exec()
      .then((response) => {
        const movies = response.map((element) => element.movieId);
        for (let i = 0; i < movies.length; i++) {
          x = [...x, ...movies[i]];
        }
        const y = x
          .sort()
          .map((element, index) => {
            if (!x.indexOf(element, index + 1) == index) {
              return null;
            }
            return element;
          })
          .filter((el) => el != null);

        res.status(200).json({
          success: true,
          movies: y,
        });
      });
  } catch (err) {
    next(err);
  }
};
const getMoviesbyId = async (req, res, next) => {
  const id = req.body.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      throw new ErrorHandler(
        404,
        " There is no movie with this id in the database "
      );
    }
    res.status(200).json({
      success: true,
      movie,
    });
  } catch (error) {}
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieByName,
  editMovie,
  deleteMovie,
  getMoviesbyId,
  getMoviesByGenre,
};
