// import multer from "multer";
// import path from "path";

// const storage = multer.diskStorage({
//   destination: (_req, _file, cb) => {
//     cb(null, "/uploads");
//   },
//   filename: function (_req, file, cb) {
//     cb(null, file.fieldname + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage }).array("images", 5);
// // export const upload = multer();
// export default upload;
