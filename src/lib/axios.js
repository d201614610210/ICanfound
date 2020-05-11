import axios from 'axios';
import { Message, Loading } from 'element-ui';
import router from '../../router';
import {getStore, removeStore} from './common'
// 请求超时时间 & 允许你cookie跨域 & 多环境打包配置
axios.defaults.timeout = 0;
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = process.env.BASE_URL;
 
//初始化loading
let loading;
 
//开始加载动画
function startLoading() {
  loading = Loading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0.8)',
    text: '拼命加载中...'
  });
}
// 结束加载动画
function endLoading() {
  loading.close();
}
 
// 请求拦截  设置统一header
axios.interceptors.request.use(
  config => {
    // startLoading();
    if (getStore('auth')) {
      config.headers['token'] = getStore('auth');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
 
// 响应拦截  401 token过期处理
axios.interceptors.response.use(
  response => {
    // endLoading();
    return response.data;
  },
  error => {
    console.log(error);
    // endLoading();
    // Message.error(error.response);
    const { status } = error.response;
    if (status == 401) {
      Message.error('token已失效，请重新登录');
      removeStore('auth');
      router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default axios;