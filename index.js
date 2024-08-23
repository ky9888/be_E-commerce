import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import router from "./src/router/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import "./src/passport.js";
// import session from "express-session";
// import passport from "passport";
// import cookieSession from 'cookie-session'
const app = express();

dotenv.config();
const PORT = process.env.PORT || process.env.URL_API;
const URI_DB = process.env.URI_DB;
connect(URI_DB);


// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );
// app.use(passport.initialize());
// app.use(passport.session());


// const allowedOrigins = [
//   'http://localhost:3000',
//   'https://be-e-commerce-3ayq.onrender.com'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));

app.use(cors({
  origin: process.env.URL_CLIENT 
}));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
