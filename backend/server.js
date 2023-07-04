const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Config Files

dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server Is Working on the Port http://localhost:${process.env.PORT}`
  );
});
