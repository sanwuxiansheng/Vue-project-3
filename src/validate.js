import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_CN',{
  messages: zh_CN.messages,
  attributes:{
    phone: '手机号',
    code: '短信验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '图形验证码'
  }
});
// 手机的验证
VeeValidate.Validator.extend('phone', {
  getMessage: (field) => `请输入正确的` + field,
  validate: (value) =>{
      const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      return reg.test(value) 
  }  
});
// 密码的验证
VeeValidate.Validator.extend('password', {
  getMessage: (field) => `请输入正确的` + field,
  validate: (value) => {
    return /[0-9a-zA-Z]/.test(value)
  }
})