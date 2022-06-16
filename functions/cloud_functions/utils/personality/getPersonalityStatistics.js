const getQuestions = require("../getQuestions");
const calculatePersonalityStatistics = require("./calculatePersonalityStatistics");
const getPersonalityStatistics = (questions, answers) => {
  const personalQuestions = getQuestions(questions, "personal");
  const driverQuestions = getQuestions(questions, "driver");
  const leadQuestions = getQuestions(questions, "lead_question");

  const personalStatistics = calculatePersonalityStatistics(
    personalQuestions,
    answers,
    "Personality"
  );
  const driverStatistics = calculatePersonalityStatistics(
    driverQuestions,
    answers,
    "Driver"
  );
  const leadStatistics = calculatePersonalityStatistics(
    leadQuestions,
    answers,
    "Lead"
  );
  return [personalStatistics, driverStatistics, leadStatistics];
};
module.exports = getPersonalityStatistics;
