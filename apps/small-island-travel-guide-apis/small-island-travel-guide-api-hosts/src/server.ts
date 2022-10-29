import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

const typeDefs = `#graphql
  type Host {
  id: ID!
  name: String!
  location: String!
  phone: String
  email: String!
  }

  type Query {
    hosts: [Host]!
  }
`;

const hosts = [
  {
    id: 'host-1.0.0',
    name: 'Sinopia Inn',
    location: 'Portland, Jamaica, West Indies',
    phone: '07395842452',
    email: 'info@sinopiainn.com',
  },
];

const resolvers = {
  Query: {
    hosts: () => hosts,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(server);
