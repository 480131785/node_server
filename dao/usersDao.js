const { usersModel } = require('./models/usersModel')

module.exports.login = async function (user) {
    const res = await usersModel.find(user)
    return res
}

module.exports.register = async function (user) {
    const res = await usersModel.find(user)
    return res
}

module.exports.registers = async function (user) {
    const res = await usersModel.create(user)
    return res
}