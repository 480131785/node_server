var express = require('express');
var router = express.Router();

const { login, register, isLogin } = require('../service/usersService')

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

// 注册操作
router.post('/register', async function (req, res, next) {
	const user = req.body
	const data = await register(user)
	res.send(data)
});

// 登录操作
router.post('/login', async function (req, res, next) {
	const user = req.body
	const data = await login(user);
	res.send(data)
});

// 验证权限
router.get('/isLogin', async function (req, res, next) {
	const token = req.get('authorization')
	const data = await isLogin(token);
	res.send(data)
});

module.exports = router;
