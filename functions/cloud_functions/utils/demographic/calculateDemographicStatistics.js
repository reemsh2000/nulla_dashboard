const calculateDemographicStatistics = (question, answers) => {
  const statistics = {
    question: "",
    questionStatistic: {},
  };
  statistics["question"] = question;
  answers.items.forEach((surveyResponse) => {
    surveyResponse.answers.forEach((answer) => {
      if (answer.field.id === question.questionId) {
        question.answers.forEach((questionAnswer) => {
          if (!statistics.questionStatistic[questionAnswer]) {
            statistics.questionStatistic[questionAnswer] = 0;
          }
          if (questionAnswer === answer.choice.label) {
            statistics.questionStatistic[questionAnswer] += 1;
          }
        });
      }
    }); // survey response loop end
  });
  return statistics;
};
module.exports = calculateDemographicStatistics;
