const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");
const indexRoutes = require('./routes/index');
const { environment, stripeApiKey } = require("./config");
const isProduction = environment === "production";

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

console.log("isProduction: ", isProduction)

const corsOptions = {
  origin: isProduction ? "https://web-main.onrender.com" : "http://localhost:5173",
  credentials: true,
}

console.log("CORS Option: ", corsOptions)

app.use(cors(corsOptions));

if (isProduction) {
  console.log("PRODUCTION")
  // need to find a better csurf package
  // app.use(
  //   csurf({
  //     cookie: {
  //       secure: isProduction,
  //       sameSite: isProduction && "Lax",
  //       httpOnly: true,
  //     },
  //   })
  // );
} else {
  console.log("DEVELOPMENT")
}

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use('/', indexRoutes);


app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
});

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;