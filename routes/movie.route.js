const router = require("express").Router();
const {
  createMovie,
  deleteMovie,
  editMovie,
  getAllMovies,
  getMovieByName,
  getMoviesbyId,
  getMoviesByGenre,
} = require("../controllers/movieController");
const multer = require("multer");
// const upload = multer({dest: 'uploads'})
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

//Movies routes
//
//Public
router.get("/", getAllMovies);

router.get("/:id", getMoviesbyId);

router.get("/", getMovieByName);
// /movie/genre
router.get("/whatever/genre", getMoviesByGenre);
//GET MOVIES BY LOCATION ;

router.post("/create", upload.single("img"), createMovie);
router.post("/test", upload.single("img"), (req, res, next) => {
  console.log(req.file);
  res.send("file uploaded");
});
router.patch("/:id", editMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
