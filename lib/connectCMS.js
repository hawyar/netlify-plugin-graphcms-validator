const { GraphQLClient } = require("graphql-request");

const getConnection = async () => {
  try {
    const graphqlClient = new GraphQLClient("");

    return graphqlClient;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

module.exports.getConnection = getConnection;
