const calculateSnapshotStatistics = (question, answers) => {
  const statistics = {agree: 0, rest: 0, title: ""};
  answers.items.forEach((surveyResponse) => {
    surveyResponse.answers.forEach((answer) => {
      if (answer.field.id === question.id) {
        statistics["title"] = question.title;
        switch (answer.choice.label) {
          case "Strongly agree":
          case "Agree":
            statistics["agree"] = statistics["agree"] + 1;
            break;
          case "Disagree":
          case "Strongly disagree":
          case "Neutral":
          case "Unsure":
            statistics["rest"] = statistics["rest"] + 1;
            break;
        }
      }
    }); // answers loop end
  });
  return convertToPercentage(statistics);
};

const convertToPercentage = ({agree, rest, title}) => {
  const total = agree + rest;
  const agreePer = Math.round((agree / total) * 100);
  return {agree: agreePer, title};
};
module.exports =calculateSnapshotStatistics ;
