const getQuestionsUsingRefs = require("./getQuestionsUsingRefs");
const calculateSnapshotStatistics = require("./calculateSnapshotStatistics");

const getSnapshotStatistics = (questions, answers) => {
  const snapshotQuestions = getQuestionsUsingRefs(questions);
  const statistics = [];
  snapshotQuestions.forEach((question) => {
    statistics.push(calculateSnapshotStatistics(question, answers));
  });
  return statistics;
};
module.exports = getSnapshotStatistics;
