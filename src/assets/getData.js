import axios from 'axios';

// 获取首页banner数据
export const getHomeBanner = () => axios.get(`/data/Home/Banner.json`).then((res) => {
  return res
});
// 获取首页SecondsKill数据
export const getHomeSecondsKill = () => axios.get(`/data/Home/SecondsKill.json`).then((res) => {
  return res
});
// 获取首页Eat数据
export const getHomeDigital = () => axios.get(`/data/Home/Digital.json`).then((res) => {
  return res
});
// 获取首页Eat数据
export const getHomeEat = () => axios.get(`/data/Home/Eat.json`).then((res) => {
  return res
});


// 获取首页List数据
export const getListOption = () => axios.get(`/data/List/Option.json`).then((res) => {
  return res
});


// 获取Detail数据
export const getDetail = () => axios.get(`/data/Detail/Detail.json`).then((res) => {
  return res
});
// 获取Intro数据
export const getDetailIntro = () => axios.get(`/data/Detail/Intro.json`).then((res) => {
  return res
});

// 获取user名单
export const getUserList = () => axios.get(`/data/Detail/userList.json`).then((res) => {
  return res
});

// 获取指定用户信息
export const getUserInfo = (username) => axios.get(`/data/users/${username}.json`).then((res) => {
  return res
});









