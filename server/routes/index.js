// /**
//  * ajax 服务路由集合
//  */
const router = require('koa-router')({
    prefix: '/weapp'   // 定义所有路由的前缀都已 /weapp 开头
})
const controllers = require('../controllers')

// // 从 sdk 中取出中间件
// // 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
// const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

// // --- 登录与授权 Demo --- //
// // 登录接口 /weapp/login
// router.get('/login', authorizationMiddleware, controllers.login)
// // 用户信息接口（可以用来验证登录态） /weapp/user
// router.get('/user', validationMiddleware, controllers.user)

//测试
router.get('/demo', controllers.demo)

module.exports = router
