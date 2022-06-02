const express = require("express");
const compression = require("compression");
const functions = require("firebase-functions");
const getSurveyStatistics = require("./cloud_functions/getStatistics");
const app = express();

app.disable("x-powered-by");
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/survey-statistics", getSurveyStatistics);

exports.app = functions.https.onRequest(app);
