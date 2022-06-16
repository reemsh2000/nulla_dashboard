const convertToPercentage = ({ agree, neutral, disagree, title='' }) => {
  const total = agree + neutral + disagree;
  const agreePer = Math.round((agree / total) * 100);
  const neutralPer = Math.round((neutral / total) * 100);
  const disagreePer = Math.round((disagree / total) * 100);

  return { agree: agreePer, neutral: neutralPer, disagree: disagreePer, title };
};
module.exports = convertToPercentage;
