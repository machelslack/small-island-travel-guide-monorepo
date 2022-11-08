import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { gql } from 'graphql-tag';
const hosts = [
    {
        id: 'host-1.0.0',
        name: 'Sinopia Inn',
        location: 'Portland, Jamaica, West Indies',
        phone: '07395842452',
        email: 'info@sinopiainn.com',
    },
];
const fetchHostById = (hostId) => {
    return hosts.filter((host) => host.id === hostId)[0];
};
const typeDefs = gql `
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )
  type Host @key(fields: "id") {
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
const resolvers = {
    Query: {
        hosts: () => hosts,
    },
    Host: {
        __resolveReference(host, { fetchHostById }) {
            return fetchHostById(host.id);
        },
    },
};
const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
const standAloneServer = await startStandaloneServer(server, {
    listen: { port: 4001 },
    context: async () => ({
        fetchHostById,
    }),
});
const url = async () => standAloneServer;
url().then((response) => {
    console.log(`🚀  Server ready at: ${response.url}`);
});
//# sourceMappingURL=index.js.map