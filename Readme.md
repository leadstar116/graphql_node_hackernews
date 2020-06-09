The goal of this project is to build an API for a Hacker News clone. Here is a quick rundown of what to expect in this project.

## Main implementation

- Simply defining a GraphQL schema for the server and writing corresponding resolver functions.

- The database layer is powered by Prisma and will be connected to your GraphQL server via the Prisma client.

- Implementing signup/login functionality that enables users to authenticate against the API. This will also allow you to check the permissions of your users for certain API operations.

- Adding realtime functionality to your API using GraphQL subscriptions.

- Allow the consumers of the API to constrain the list of items they retrieve from the API by adding filtering and pagination capabalities to it.

## Technologies that used in this project

- graphql-yoga: Fully-featured GraphQL server with focus on easy setup, performance & great developer experience. It is built on top of Express, apollo-server, graphql-js and more.

- Prisma: Prisma replaces traditional ORMs. Use the Prisma client to implement your GraphQL resolvers and simplify database access

- GraphQL Playground: “GraphQL IDE” that allows to interactively explore the functionality of a GraphQL API by sending queries and mutations to it. It’s somewhat similar to Postman which offers comparable functionality for REST APIs. Among other things, a GraphQL Playground…