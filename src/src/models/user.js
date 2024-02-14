const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    userEmail: { type: String, trim: true, required: true },
    userName: { type: String, trim: true, required: true },
    userPass: { type: String, trim: true, required: true },
    birthYear: { type: Number, trim: true, required: true },
    rolAssigned: { type: String, trim: true, required: true },
    userPhoto: { type: String, trim: true, required: true },
  },
  { timestamps: true, collection: 'users' }
);

// Función con bcrypt para encriptarla
userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model('users', userSchema, 'users');

module.exports = User;
