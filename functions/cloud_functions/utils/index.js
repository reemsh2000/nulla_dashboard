const getPersonalityStatistics = require("./personality/getPersonalityStatistics");
const getDemographicStatistics = require("./demographic/getDemographicStatistics");
const getSnapshotStatistics = require("./snapshot/getSnapshotStatistics");

module.exports = {
  getPersonalityStatistics,
  getSnapshotStatistics,
  getDemographicStatistics,
};
