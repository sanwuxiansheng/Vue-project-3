import {RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO } from '../mutation-types.js'
// 引入api目录中的index.js 使用里面的方法
import {  reqGoods, reqRatings, reqInfo } from '../../api'
const state = {
  //goods,info,ratings
  goods:[],  //点餐
  ratings:[], //评价
  info:{} //商家信息
};
const mutations = {
  // 获取goods和info和ratings数据
  // 获取goods点餐的数据,是结构
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },
  // 获取的ratings的数据
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },
  // 获取的是info的数据  商家信息
  [RECEIVE_INFO](state, { info }) {
    state.info = info
  }
};
const actions = {
  // 获取goods的数据
  async getGoods({ commit }) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
    }
  },
  async getRatings({ commit }) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
    }
  },
  async getInfo ({commit}) {
    const result=await reqInfo()
    if(result.code===0){
      const info =result.data
      commit(RECEIVE_INFO,{info})
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
}