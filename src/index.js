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
        },
        updateLink: (parent, args) => {
            links = links.map((link) => {
                return (link.id === args.id)
                ? args
                : link
            })
            return links
        },
        deleteLink: (parent, args) => {
            const newLinks = [];
            links.forEach((link, index) => {
                if(link.id != args.id)
                    newLinks.push(link)
            })
            links = newLinks
            return links
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