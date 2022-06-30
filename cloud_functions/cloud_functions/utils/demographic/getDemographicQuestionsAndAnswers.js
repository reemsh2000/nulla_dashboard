const getQuestions = require("../getQuestions");
const getDemographicQuestionsAndAnswers = (questions) => {
  const demographicQuestions = getQuestions(questions, "demographic");
  const demographicQuestionsAnswers = [];
  demographicQuestions.forEach((question) => {
    switch (true) {
      case question.title.includes("old"):
        demographicQuestionsAnswers.push({
          question: question.title,
          answers: getQuestionLables(question.properties.choices),
          title: "age",
          questionId: question.id,
        });
        break;

      case question.title.includes("located"):
        demographicQuestionsAnswers.push({
          question: question.title,
          answers: getQuestionLables(question.properties.choices),
          title: "location",
          questionId: question.id,
        });
        break;
      case question.title.includes("business"):
        demographicQuestionsAnswers.push({
          question: question.title,
          answers: getQuestionLables(question.properties.choices),
          title: "teams",
          questionId: question.id,
        });
        break;
    }
  });
  return demographicQuestionsAnswers;
};

const getQuestionLables = (answers) => {
  const labels = [];
  answers.forEach((answer) => {
    labels.push(answer.label);
  });
  return labels;
};
module.exports = getDemographicQuestionsAndAnswers;
