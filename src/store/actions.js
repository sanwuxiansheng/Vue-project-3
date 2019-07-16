// 存储间接修改状态数据的方法的对象
// 引入定义好的常量
import { RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS } from './mutation-types' 
// 引入api中的index.js文件使用其中的方法
import { reqAddress, reqCategories, reqShops } from '../api'
export default {
  // 发送请求获取地址的信息
  async getAddress ({ commit, state }) {
    const { longitude, latitude } = state
    // 传入经纬度通过ajax请求获取数据
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) { 
      // 说明成功获取数据
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  // 发送请求获取食品分类
  async getCategories ({commit}) {
    const result = await reqCategories()
    if (result.code === 0) {
      // 说明成功获取数据
      const categories = result.data
      commit(RECEIVE_CATEGORIES, categories)
    }
  },
  // 发送请求获取商铺信息
  async getShops ({ commit, state }) {
    const { longitude, latitude } = state
    // 传入经纬度通过ajax请求获取数据
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) { 
      // 说明成功获取数据
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}