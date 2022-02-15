// 连接数据库
const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost:27017/lsy'
mongoose.connect(dbURL)
mongoose.connection.on('connected', () => {
    console.log(dbURL + '数据库链接成功')
})