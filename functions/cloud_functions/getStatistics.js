const axios = require("axios");
const getPersonalityStatistics = require('./utils/personality/getPersonalityStatistics');
const getSnapshotStatistics = require('./utils/snapshot/getSnapshotStatistics');
const getDemographicStatistics = require('./utils/demographic/getDemographicStatistics');

const getSurveyStatistics = async (req, res) => {
  const apiEndPoint = "https://api.typeform.com/forms/";
  const headers = {
    Authorization:
      "Bearer tfp_2Ph2w1NhEaFUmqoLFnsDGQo72i7VHt3uvjYXtvtow9hv_3mJs7NpZAGDsrf",
  };
  const { data: questions } = await axios.get(apiEndPoint + "UzkZtaLj", {
    headers: headers,
  });
  const { data: answers } = await axios.get(
    apiEndPoint + "UzkZtaLj" + "/responses",
    { headers: headers }
  );
  const personalityStaistics = getPersonalityStatistics(questions, answers);
  const snapshotStatistics = getSnapshotStatistics(questions, answers);
  const DemographicStatistics = getDemographicStatistics(questions, answers);
  res.json({ personalityStaistics,snapshotStatistics,DemographicStatistics});
};

module.exports = getSurveyStatistics;
