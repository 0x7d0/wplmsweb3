import { GraphQLClient } from 'graphql-request';

const API_URL = 'https://wplmsweb3.wpengine.com/graphql';

const client = new GraphQLClient(API_URL);

export async function fetchPages() {
  const query = `
    query {
      pages {
        nodes {
          id
          title
          uri
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.pages.nodes;
}
