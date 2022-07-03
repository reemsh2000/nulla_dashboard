const getQuestionRefs = require("./getQuestionRefs");

const getQuestions = (questions, questionType) => {
  const firstRef = getQuestionRefs(questions, questionType)[0];
  const requiredQuestions = [];
  questions.fields.forEach((questions) => {
    if (questions.properties.fields) {
      for (let i = 0; i < questions.properties.fields.length; i++) {
        if (questions.properties.fields[i].ref === firstRef) {
          questions.properties.fields.forEach((question) => {
            requiredQuestions.push(question);
          });
        }
      }
    }
  });
  return requiredQuestions;
};
module.exports = getQuestions;
