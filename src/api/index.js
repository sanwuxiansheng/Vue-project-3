import ajax from './ajax.js';
const BASE = '/api'
// 根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)
// 获取食品分类列表
export const reqCategories = () => ajax(BASE + `/index_category`)
// 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE + `/shops?`, { latitude, longitude })
// 用户名密码登陆 POST请求
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax(BASE + `/login_pwd`, { name, pwd, captcha }, 'POST')
// 手机号验证码登陆 POST请求
export const reqSmsLogin = (phone, code) => ajax(BASE + `/login_sms`, { phone, code }, 'POST')
// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE + `/sendcode`, { phone })
// 根据会话获取用户信息
export const reqUser = () => ajax(BASE + `/userinfo`)
// 用户退出登录
export const reqLoginOut = () => ajax(BASE + `/logout`)