const { register } = require('../../controllers/user')
const User = {
  Query: {
    getUser: () => 'Usuario'
  },
  Mutation: {
    register: async (parent, { user } , context, info) => {
      return await register(user)
    },
    login: () => ({
      username: 'user'
    })
  },
  UserResponse: {
    __resolveType(obj,context, info){
      return obj.ok? 'SuccessResponseUser':'FailResponse'
    }
  }
}

module.exports = User;