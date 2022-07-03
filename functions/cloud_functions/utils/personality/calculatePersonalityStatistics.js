const convertToPercentage = require("./convertToPercentage");

const calculateSnapshotStatistics = (questions, answers, title) => {
  const statistics = { agree: 0, neutral: 0, disagree: 0, title };
  answers.items.forEach((surveyResponse) => {
    surveyResponse.answers.forEach((answer) => {
      questions.forEach((question) => {
        if (answer.field.id === question.id) {
          statistics["title"] = title;
          switch (answer.choice.label) {
            case "Strongly agree":
            case "Agree":
              statistics["agree"] = statistics["agree"] + 1;
              break;
            case "Disagree":
            case "Strongly disagree":
              statistics["disagree"] = statistics["disagree"] + 1;
              break;
            case "Neutral":
            case "Unsure":
              statistics["neutral"] = statistics["neutral"] + 1;
              break;
          }
        }
      });
    });
  });
  return convertToPercentage(statistics);
};
module.exports = calculateSnapshotStatistics;
