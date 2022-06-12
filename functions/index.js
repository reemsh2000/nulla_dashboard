const express = require("express");
const compression = require("compression");
const functions = require("firebase-functions");
const getSurveyStatistics = require("./cloud_functions/getStatistics");
const cors = require("cors");
const app = express();
app.disable("x-powered-by");
app.use(compression());
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));

app.get("/survey-statistics/:surveyId", getSurveyStatistics);


exports.app = functions.https.onRequest(app);
