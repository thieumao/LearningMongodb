const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ets2020', {useNewUrlParser: true, useUnifiedTopology: true});

const userScheme = new mongoose.Schema({
  name: String,
  age: Number
});

const user = mongoose.model('user', userScheme);

// user.create(
//   { name: "Thieu Mao", age: 28 },
//   { name: "Thu Ha", age: 24 }
// );

// user.create(
//   { name: "Mot Mao", age: 28 }
// );

// user.find().exec((err, users) => {
//   console.log(users);
// });

// user.update({ name: "Mot Mao"}, { age: 24 }).exec((err, result) => {
//     console.log(result);
// });

user.remove({ name: "Thieu Mao"}).exec((err, result) => {
  console.log(result);
});