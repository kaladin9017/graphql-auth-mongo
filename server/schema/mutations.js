const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const UserType = require('./types/user_type');
const AuthService = require('../services/auth')


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password}, req) { //request represents the request object from express
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, { email }, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password}, req) { //request represents the request object from express
        return AuthService.login({ email, password, req });
      }
    }
  }
})

module.exports = mutation;
