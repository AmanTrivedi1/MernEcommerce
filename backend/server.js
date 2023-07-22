const app = require("./app");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaought Exception Defined Upper beacause Necessary
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Sutting Down the Server due to Uncaught error");
  process.exit(1);
});

//Config Files

dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server Is Working on the Port http://localhost:${process.env.PORT}`
  );
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Sutting Down the Server due to Unhandled error");
  server.close(() => {
    process.exit(1);
  });
});
