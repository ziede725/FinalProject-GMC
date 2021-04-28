const ErrorHandler = require("../helpers/errorHandler");

const Genre = require("../models/Genre");

const createGenre = async (req, res, next) => {
  const genre = req.body;
  try {
    //Check missing : if the user already exists => fail the operation
    const newGenre = await Genre.create(genre);

    // No need for this check/throw error because mongoose will throw an error if creation fails
    // and this error will be caught in the nex(error)
    if (!newGenre) {
      throw new ErrorHandler(500, "Genre creation failed !");
    }
    res.status(200).json({
      success: true,
      message: "Genre creation was successfull ",
      newGenre,
    });
  } catch (err) {
    next(err);
  }
};
const editGenre = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  try {
    //same as create + missing runValidators:true
    const editedGenre = await Genre.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    if (!editedGenre) {
      throw new ErrorHandler(404, "There is no genre with this id");
    }
    res.status(200).json({
      succes: true,
      message: "Genre edited with success",
      editedGenre,
    });
  } catch (err) {
    next(err);
  }
};

const deleteGenre = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedGenre = await Genre.findByIdAndDelete(id);
    if (!deletedGenre) {
      throw new ErrorHandler(404, "There is no such genre with id ");
    }
    res.status(200).json({
      success: true,
      message: "Genre deleted with success",
      deletedGenre,
    });
  } catch (err) {
    next(err);
  }
};
//To recheck
const populateMovie = async (req, res, next) => {
  const id = req.params.id;
  try {
    const GenreOfMovie = await Genre.findById(id).populate("Movie");
    res.status(200).json({
      success: true,
      GenreOfMovie,
    });
  } catch (error) {
    next(error);
  }
};

//Added functions
const getAllGenres = async (req, res, next) => {
  try {
    const data = await Genre.find({}).exec();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getGenreById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const genreExist = await Genre.findById(id);
    if (!genreExist)
      throw new ErrorHandler(
        404,
        `No genre with id : ${id} is found in the database`
      );

    const genre = await Genre.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true, runValidators: true }
    ).exec();
    res.status(200).json({
      success: true,
      genre,
    });
  } catch (error) {
    next(error);
  }
};

const pushMovieId = async (req, res, next) => {
  const id = req.params.id;
  const movieId = req.params.movieId;

  try {
    //check if genre exist
    const genreExist = await Genre.findById(id);
    if (!genreExist)
      throw new ErrorHandler(
        404,
        `No genre with id : ${id} is found in the database`
      );
    //check if movieId exists in genre
    movieIdExist = genreExist.movieId.find((e) => e == movieId);
    if (movieIdExist)
      throw new ErrorHandler(
        404,
        `movie with : ${movieId} already exists in genre`
      );
    const newCount = updatedMovieCount(genreExist) + 1;
    const genre = await Genre.findOneAndUpdate(
      { _id: id },
      { $push: { movieId: movieId }, $set: { count: newCount } },
      { new: true, runValidators: true }
    ).exec();
    res.status(200).json({
      success: true,
      message: `${movieId} added successfully to ${genre.name}`,
      genre,
    });
  } catch (error) {
    next(error);
  }
};

const pullMovieId = async (req, res, next) => {
  const id = req.params.id;
  const movieId = req.params.movieId;

  try {
    //check if genre exist
    const genreExist = await Genre.findById(id);
    if (!genreExist)
      throw new ErrorHandler(
        404,
        `No genre with id : ${id} is found in the database`
      );
    //check if movieId exists in genre
    movieIdExist = genreExist.movieId.find((e) => e == movieId);
    if (!movieIdExist)
      throw new ErrorHandler(
        404,
        `No movie with : ${movieId} is found in the genre ${genreExist.name}`
      );
    const newCount = updatedMovieCount(genreExist) - 1;
    const genre = await Genre.findOneAndUpdate(
      { _id: id },
      { $set: { count: newCount }, $pull: { movieId: movieId } },
      { new: true, runValidators: true }
    ).exec();

    res.status(200).json({
      success: true,
      message: `${movieId} retrieved successfully from ${genre.name}`,
      genre,
    });
  } catch (error) {
    next(error);
  }
};

const updatedMovieCount = (genre) => {
  const movieCount = genre.movieId.length;
  return movieCount;
};

module.exports = {
  deleteGenre,
  editGenre,
  createGenre,
  populateMovie,
  getAllGenres,
  getGenreById,
  pushMovieId,
  pullMovieId,
};
