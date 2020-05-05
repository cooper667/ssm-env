const aws = require("aws-sdk");
const ssm = new aws.SSM({ region: process.env.AWS_REGION || "eu-west-1" });

module.exports = async (ssmPath = "/") => {
  if (!ssmPath.endsWith("/")) {
    ssmPath += "/";
  }

  const params = {
    Path: ssmPath,
    WithDecryption: true,
  };

  const data = await ssm.getParametersByPath(params).promise();
  const decryptedVariables = {};
  data.Parameters.forEach(({ Name, Value }) => {
    const key = Name.split(".")[1];
    process.env[key] = Value;
    decryptedVariables[key] = Value;
  });

  return decryptedVariables;
};
