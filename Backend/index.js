const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userController = require("./controller/userController");
const { verifyToken } = require("./controller/userController"); 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({origin: "http://localhost:3000"} )); 

app.get("/", verifyToken, (req, res) => {
  return res.json({ status: "Success", user: req.user });
});

// CRUD routes for users
app.post("/users", userController.addUser);
app.get("/users", userController.verifyToken, userController.getUsers);
app.get("/users/:id", userController.getUser);
app.put("/users/:id", userController.patchUser);
app.delete("/users/:id", userController.deleteUser);
app.post("/login", userController.loginUser);
app.post("/registration", userController.registerUser);

// Start the server
const { sequelize } = require("./models"); // Assuming this is the correct path to the models

sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
    app.listen(3000, () => console.log("App is running on http://localhost:3000!"));
  })
  .catch((error) => {
    console.error("Unable to sync the database:", error);
  });
