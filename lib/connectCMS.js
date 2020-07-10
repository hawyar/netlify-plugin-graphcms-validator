const { GraphQLClient } = require("graphql-request");

const getConnection = async () => {
  try {
    const graphqlClient = new GraphQLClient(
      "https://api-us-east-1.graphcms.com/v2/ckccyan400myy01z03afjg08y/master"
    );

    return graphqlClient;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

module.exports.getConnection = getConnection;
