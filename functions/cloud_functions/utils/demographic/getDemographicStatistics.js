const getDemographicQuestionsAndAnswers = require("./getDemographicQuestionsAndAnswers");
const calculateDemographicStatistics = require("./calculateDemographicStatistics");
const getDemographicStatistics = (questions, answers) => {
  const demographicStatistics = [];
  const demographicQuestionsAnswers =
    getDemographicQuestionsAndAnswers(questions);
  demographicQuestionsAnswers.forEach((question) => {
    demographicStatistics.push(
      calculateDemographicStatistics(question, answers)
    );
  });
  return demographicStatistics;
};
module.exports = getDemographicStatistics;

