const getQuestionRefs = require("../getQuestionRefs");

const getQuestionsUsingRefs = (allQuestions) => {
  const highlightQuestions = [];
  const refs = getQuestionRefs(allQuestions, "highlight");
  allQuestions.fields.forEach((questions) => {
    if (questions.properties.fields) {
      questions.properties.fields.forEach((question) => {
        refs.forEach((ref) => {
          if (question.ref === ref) {
            highlightQuestions.push(question);
          }
        });
      });
    }
  });
  return highlightQuestions;
};
module.exports = getQuestionsUsingRefs;
