const mongoose = { Schema } = require('mongoose')

const UserSchema = Schema({
  username: {
    type: String,
    required: [true, 'Nombre de Usuario es requerido']
  },
  password: {
    type: String,
    required: [true, 'Contraseña es requerida']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Correo Electronico es requerido']
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  }]
})

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User',UserSchema)

module.exports = UserModel;