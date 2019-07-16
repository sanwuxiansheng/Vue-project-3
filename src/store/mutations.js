// 存储直接修改状态数据的方法的对象
// 引入定义的常量
import { RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS } from './mutation-types'
export default {
  // 更新地址
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  // 获取食品分类
  [RECEIVE_CATEGORIES] (state, categories) {
    state.categories = categories
  },
  // 获取商铺列表
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  }
}