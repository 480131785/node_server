const { login, register, registers } = require('../dao/usersDao')

// 1.引入jwt
const jwt = require('jsonwebtoken');

module.exports.login = async function (user) {
    const token = 'Bearer ' + jwt.sign(
        user, // 设置要保存的用户信息
        'suoda', // 密钥字符串
        { expiresIn: 60 } // 设置 token 有效期，单位 s
    )
    // 持久层的 login 函数
    const res = await login(user);
    if (res.length) {
        return {
            msg: '登陆成功',
            code: 1,
            token
        }
    } else {
        return {
            msg: '账号密码错误',
            code: 0
        }
    }
}

module.exports.register = async function (user) {
    if (user.username === '' || user.password === '') {
        return {
            msg: '请输入用户名和密码',
            code: 0
        }
    }
    const res = await register(user)
    if (res.length) { // 直接返回给第一层，让第一层给前端
        return {
            msg: '用户名已存在',
            code: 0
        }
    } else { // 注册操作
        await registers(user)
        return {
            msg: '注册成功',
            code: 1
        }
    }
}

module.exports.isLogin = async function (token) {
    let tokens = token.split(' ')[1]
    const data = jwt.verify(tokens, 'suoda')
    return {
        msg: '身份认证通过',
        code: 1,
        data: data.username
    }
}