// esm config
import "dotenv/config";
import * as Validator from "@graphcms/validation";

const { request } = require("graphql-request");

const chalk = require("chalk");

import testJson from "./test.json";
async function main() {
  const endpoint = process.env.GRAPH_CMS_KEY;

  // [[userinput]] from manifest.yml
  const cmsCollection = `Posts`;
  const path = `Blog`.toLowerCase();
  console.log(chalk.cyan.bold(`GraphCMS data: ${cmsCollection}`));
  console.log(chalk.greenBright.bold(`On path: ${path}`));

  const query = /* GraphQL */ `
    query MyQuery {
      __typename
      posts {
        id
        title
      }
    }
  `;

  const data = await request(endpoint, query);

  const type = JSON.stringify(data["__typename"]).replace(/^"(.*)"$/, "$1");
  // console.log(type);

  if (type !== "Query") {
    console.log(
      chalk.red(`Error:`),
      `The first argument must be of type ${chalk.bold(
        `Query`
      )}, but you passed in type ${chalk.bold(type)}`
    );
  }

  console.log(JSON.stringify(data, undefined, 2));

  var secondKey = Object.keys(data)[1]; //fetched the key at second index

  // console.log(secondKey);

  // display before searching Gatsby
  // console.log(chalk.magenta.bold(`Inspecting Gatsby for GraphCMS queries`));

  // // display before searching Gatsby
  // console.log(
  //   chalk.magenta.green(
  //     `Found GraphCMS query for ${chalk.bgWhiteBright.black.bold(
  //       secondKey.charAt(0).toUpperCase().concat(secondKey.substr(1))
  //     )} collection`
  //   )
  // );
}

main().catch((error) => console.error(error));
