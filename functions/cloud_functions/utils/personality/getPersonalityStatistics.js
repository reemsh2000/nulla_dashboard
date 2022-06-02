const getQuestions = require("../getQuestions");
const calculateSnapshotStatistics = require("./calculatePersonalityStatistics");
const getPersonalityStatistics = (questions, answers) => {
  const personalQuestions = getQuestions(questions, "personal");
  const driverQuestions = getQuestions(questions, "driver");
  const leadQuestions = getQuestions(questions, "lead_question");

  const personalStatistics = calculateSnapshotStatistics(
    personalQuestions,
    answers,
    "Personality"
  );
  const driverStatistics = calculateSnapshotStatistics(
    driverQuestions,
    answers,
    "Driver"
  );
  const leadStatistics = calculateSnapshotStatistics(
    leadQuestions,
    answers,
    "Lead"
  );
  return [personalStatistics, driverStatistics, leadStatistics];
};
module.exports = getPersonalityStatistics;
