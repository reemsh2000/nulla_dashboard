const calculatePersonalityStatistics = require("./calculatePersonalityStatistics");
const getQuestions = require("../getQuestions");
const getEachPersonalStat = (questions, answers) => {
  const personalQuestions = getQuestions(questions, "personal");
  const driverQuestions = getQuestions(questions, "driver");
  const leadQuestions = getQuestions(questions, "lead_question");
  const questionsStatistics = [];
  driverQuestions.forEach((question) => {
    questionsStatistics.push({
      ...calculatePersonalityStatistics([question], answers, "Driver"),
      question,
    });
  });
  personalQuestions.forEach((question) => {
    questionsStatistics.push({
      ...calculatePersonalityStatistics([question], answers, "Personal"),
      question,
    });
  });
  leadQuestions.forEach((question) => {
    questionsStatistics.push({
      ...calculatePersonalityStatistics([question], answers, "Lead"),
      question,
    });
  });
  return questionsStatistics;
};
module.exports = getEachPersonalStat;
