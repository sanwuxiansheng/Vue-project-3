// 引入定义好的常量
import { RESET_USER, RECEIVE_USER } from '../mutation-types' 
// 引入api中的index.js文件使用其中的方法
import { reqLoginOut } from '../../api'
const state = {
  // 用户信息
  user: {},
};
const mutations = {
  // 更新用户信息
  [RECEIVE_USER](state, user) {
    state.user = user
  },
  // 干掉用户
  [RESET_USER](state){
    state.user={}
  }
};
const actions = {
  // 删除用户信息
  async loginOut ({commit}) {
    const result = await reqLoginOut()
    if (result.code === 0) {
      commit(RESET_USER)
    }
  }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
}