const router = require("express").Router();
const genreController = require("../controllers/genreController");
// Routes for Genre
//
//Should be public for Admin/MovieTheater ???

router.post("/", genreController.createGenre);
router.patch("/:id", genreController.editGenre);
router.delete("/:id", genreController.deleteGenre);

router.get("/", genreController.getAllGenres);
router.get("/:id", genreController.getGenreById);
router.patch("/:id/add-movie/:movieId", genreController.pushMovieId);
router.patch("/:id/remove-movie/:movieId", genreController.pullMovieId);

//to test
router.get("/test/:id", genreController.populateMovie);

module.exports = router;
