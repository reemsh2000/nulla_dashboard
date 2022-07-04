const axios = require("axios");
const getPersonalityStatistics = require("./utils/personality/getPersonalityStatistics");
const getSnapshotStatistics = require("./utils/snapshot/getSnapshotStatistics");
const getDemographicStatistics = require("./utils/demographic/getDemographicStatistics");
const getEachPersonalStat = require("./utils/personality/getEachPersonalStat");
const getSurveyStatistics = async (req, res) => {
  const apiEndPoint = "https://api.typeform.com/forms/";
  const headers = {
    Authorization:
      "Bearer tfp_4VvjvM4NdWzgpjcc2hZGUeSm12EaatmFWnihZ9z7bt1X_3pc4UmKjyWkA9T",
  };
  const { surveyId } = req.params;
  const { data: questions } = await axios.get(apiEndPoint + surveyId, {
    headers: headers,
  });
  const { data: answers } = await axios.get(
    apiEndPoint + surveyId + "/responses",
    { headers: headers }
  );
  const personalityStaistics = getPersonalityStatistics(questions, answers);
  const snapshotStatistics = getSnapshotStatistics(questions, answers);
  const DemographicStatistics = getDemographicStatistics(questions, answers);
  const questionsStatistics = getEachPersonalStat(questions, answers);
  res.json({
    personalityStaistics,
    snapshotStatistics,
    DemographicStatistics,
    questionsStatistics,
  });
};

module.exports = getSurveyStatistics;
