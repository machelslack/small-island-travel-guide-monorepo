import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
            { name: 'hosts', url: 'http://localhost:4001' },
            { name: 'listings', url: 'http://localhost:4002' },
            { name: 'bookings', url: 'http://localhost:4003' },
        ],
    }),
});
// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
    gateway,
});
// Note the top-level `await`!
const { url } = await startStandaloneServer(server);
console.log(`🚀  Server ready at ${url}`);
//# sourceMappingURL=index.js.map