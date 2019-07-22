// 引入mock
import Mock from 'mockjs'
// 引入json数据
import data from './data.json'

// mock 生成随机的数据,拦截ajax请求
// 使用mock方法,拦截地址,返回数据结构
// 调用Mock.mock('/拦截地址',生成数据相关的模版的方式)
Mock.mock('/goods', { code: 0, data: data.goods })
Mock.mock('/info', { code: 0, data: data.info })
Mock.mock('/ratings', { code: 0, data: data.ratings })
Mock.mock('/shop_ratings', { code: 0, data: data.shop_ratings })