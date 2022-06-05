const express = require("express");
const compression = require("compression");
const functions = require("firebase-functions");
const getSurveyStatistics = require("./cloud_functions/getStatistics");
const cors = require("cors");
const login = require("./cloud_functions/login");
const app = express();
app.disable("x-powered-by");
app.use(compression());
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));

app.get("/survey-statistics/:surveyId", getSurveyStatistics);
app.post("/login", login);

exports.app = functions.https.onRequest(app);
