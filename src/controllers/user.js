const User = require('../models/user')
const register = async (userTemp) => {
  try {
    const userParse = JSON.parse(userTemp)
    const user = await User.create({
      username: userParse.username,
      password: userParse.password,
      email: userParse.email
    })
    const userDB = await user.save()
    return {
      ok: true,
      user: userDB
    }
  }catch(e){
    console.log(e)
    return {
      ok: false,
      errs: [{
        path: '',
        msg: ''
      }]
    }
  }
}

module.exports = {
  register
}