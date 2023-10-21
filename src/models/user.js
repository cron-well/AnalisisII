const mongoose = require('mongoose');
const bcryhpt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});

userSchema.methods.encryptPassword = (password) => {
    return bcryhpt.hashSync(password, bcryhpt.genSaltSync(10));
}

userSchema.methods.comparePassword = function (password) {
    return bcryhpt.compareSync(password, this.password);
}

module.exports = mongoose.model('users', userSchema);

