const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

// import { feed, link } from './resolvers/Query';
// import { signup, login, post, updateLink, deleteLink } from './resolvers/Mutation';

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Vote = require('./resolvers/Vote');

// let links = [
//   {
//     id: 'link-0',
//     url: 'www.howtographql.com',
//     description: 'Fullstack tutorial for GraphQL',
//   },
// ];

// let idCount = links.length;

// const findIndex = (id) => {
//   return (el) => el.id === id;
// };

// const resolvers = {
//   Query: {
//     info: () => `This is the API of a Hackernews Clone`,
//     // feed: () => links,
//     feed: feed,
//     // link: (parent, args) => {
//     //   // console.log(args);
//     //   const index = links.findIndex(findIndex(args.id));
//     //   return links[index];
//     // },
//     link: link,
//   },
//   Mutation: {
//     // post: (parent, args) => {
//     //   const link = {
//     //     id: `link-${idCount++}`,
//     //     description: args.description,
//     //     url: args.url,
//     //   };
//     //   links.push(link);
//     //   return link;
//     // },
//     post: post,
//     // updateLink: (parent, args) => {
//     //   const index = links.findIndex(findIndex(args.id));
//     //   const old = links[index];
//     //   const updateLink = {
//     //     ...old,
//     //     url: args.url,
//     //     description: args.description,
//     //   };
//     //   links[index] = updateLink;
//     //   return updateLink;
//     // },
//     updateLink: updateLink,
//     // deleteLink: (params, { id }) => {
//     //   const index = links.findIndex(findIndex(id));
//     //   links = [...links.slice(0, index), ...links.slice(index + 1)];
//     //   return links[index];
//     // },
//     deleteLink: deleteLink,
//   },
// };

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
};
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  // context: { prisma },
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
