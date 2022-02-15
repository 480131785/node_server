// 配置数据库集合
const { Schema, model } = require('mongoose')

// 1.定集合结构
const usersSchema = new Schema({
    username: String,
    password: String
})

// 2.定义集合模型，将 Schema 和 集合 关联起来
const usersModel = model('usersModel', usersSchema, 'users')

module.exports.usersModel = usersModel