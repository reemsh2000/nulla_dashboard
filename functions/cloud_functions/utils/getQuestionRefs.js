const getQuestionRefs = (questions, questionType) => {
  const questionRef = [];
  questions.logic.forEach((question) => {
    question.actions.forEach((action) => {
      if (action.details.value.value === questionType) {
        questionRef.push(question.ref);
      }
    });
  });
  return questionRef;
};

module.exports = getQuestionRefs;
