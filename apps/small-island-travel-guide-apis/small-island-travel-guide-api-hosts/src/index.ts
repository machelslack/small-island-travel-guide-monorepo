import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Host {
    id: ID!
  hostName: String!
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

const url = async () =>
  await startStandaloneServer(server, {
    listen: { port: 4001 },
  });

url().then((response) => {
  console.log(`🚀  Server ready at: ${response.url}`);
});
