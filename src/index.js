const { GraphQLServer } = require('graphql-yoga')

let links = [{
    id: 'link-0',
    url: 'www.hostgql.com',
    description: 'Full tutorial for GraphQL'
},
{
    id: 'link-1',
    url: "www.prisma.io",
    description: "Prisma replaces traditional ORMs"
}]

let idCount = links.length

const resolvers = {
    Query: {
        info: () => 'This is the API of a Hackernews clone',
        feed: () => links,
        link: (parent, args) => { return links.find((link) => link.id === args.id) }
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount}`,
                url: args.url,
                description: args.description
            }
            links.push(link)
            return link
        }
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
}

const server = new GraphQLServer ({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))