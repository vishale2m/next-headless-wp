import { GraphQLClient } from 'graphql-request';
const endpoint = 'http://localhost:8888/custom-theme/graphql';
export const client = new GraphQLClient(endpoint);