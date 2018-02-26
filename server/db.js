const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.once('error', () => console.log('Mongo connection error'));
db.once('open', () => console.log('Mongo connection successed'));

//定义数据的存储
const loginSchema = mongoose.Schema({
  account: String,
  password: String
});


//用一个对象暴露接口
const Models = {
  Login: mongoose.model('Login',loginSchema)
}

module.exports = Models;
