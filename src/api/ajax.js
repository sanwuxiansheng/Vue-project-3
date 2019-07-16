import axios from 'axios';
export default function ajax (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    // 执行异步ajax请求
    if (method === 'GET') {
      promise = axios.get(url, { params: data }) // params配置，指定的是query参数
    } else {
      promise = axios.post(url, data)
    }
    promise.then(
      response => { // 如果成功了，调用resolve()
        resolve(response.data)
      },
      error => { 
        alert('请求异常：' + error.message)
      }
    )
  })
}