import axios from 'axios';


// 固定信息数据请求
// 获取首页banner数据
export const getHomeBanner = () => axios.get(`http://localhost:3000/data/home/banner`).then((res) => {
  return res
});
// export const getHomeBanner = () => axios.get(`/data/Home/Banner.json`).then((res) => {
//   return res
// });
// 获取首页SecondsKill数据
export const getHomeSecondsKill = () => axios.get(`http://localhost:3000/data/home/secondsKill`).then((res) => {
  return res
});
// export const getHomeSecondsKill = () => axios.get(`/data/Home/SecondsKill.json`).then((res) => {
//   return res
// });
// 获取首页Digital数据
export const getHomeDigital = () => axios.get(`http://localhost:3000/data/home/digital`).then((res) => {
  return res
});
// export const getHomeDigital = () => axios.get(`/data/Home/Digital.json`).then((res) => {
//   return res
// });
// 获取首页Eat数据
export const getHomeEat = () => axios.get(`http://localhost:3000/data/home/eat`)
// export const getHomeEat = () => axios.get(`/data/Home/Eat.json`).then((res) => {
//   return res
// });
// 获取列表页数据
export const getListOption = () => axios.get(`http://localhost:3000/data/list`).then((res) => {
  return res
});
// export const getListOption = () => axios.get(`/data/List/Option.json`).then((res) => {
//   return res
// });
// 获取Detail数据
export const getDetailType = () => axios.get(`http://localhost:3000/data/detail/type`).then((res) => {
  return res
});
// export const getDetailType = () => axios.get(`/data/Detail/Detail.json`).then((res) => {
//   return res
// });
// 获取Intro数据
export const getDetailIntro = () => axios.get(`http://localhost:3000/data/detail/intro`).then((res) => {
  return res
});
// export const getDetailIntro = () => axios.get(`/data/Detail/Intro.json`).then((res) => {
//   return res
// });
// 获取user名单
export const getUserList = () => axios.get(`http://localhost:3000/users/userList`).then((res) => {
  return res
});
// export const getUserList = () => axios.get(`/data/Detail/userList.json`).then((res) => {
//   return res
// });
// 获取全国省市县数据
export const getChinaArea = () => axios.get(`http://localhost:3000/data/chinaarea`).then((res) => {
  return res;
})


// 动态信息数据请求
// 注册时判断用户名是否存在
export const avoidRepeat = (username) => axios.get(`http://localhost:3000/users/avoidRepeat`, { params: { username: username } }).then((res) => {
  return res;
})
// 注册完成添加用户
export const addUser = (username, password) => axios.post(`http://localhost:3000/users/adduser`, { username: username, password: password }).then((res) => {
  return res;
})

// 登录判断
export const sendLogin = (username, password) => axios.post(`http://localhost:3000/users/userLogin`, { username: username, password: password }).then((res) => {
  return res
})
// 获取指定用户信息
export const getUserInfo = (username) => axios.get(`http://localhost:3000/users/userInfo`, { params: { username: username } }).then((res) => {
  return res
});
// 修改收货地址
//第一个参数应该从vuex中获取当前登陆者的名字，第三个参数应该是点击卡片的索引
export const changeAddress = (username, address, index) => axios.post(`http://localhost:3000/users/changeAddr`, { username: username, address: address, index: index }).then((res) => {
  return res
})
// 添加收货地址
// 第一个参数是登陆者名字，第二个参数是新增的收货地址
export const addAddress = (username, address) => axios.post(`http://localhost:3000/users/addAddr`, { username: username, address: address }).then((res) => {
  return res
})

// 删除收货地址
// 第一个参数是登陆者名字，第二个参数是删除的卡片的索引
export const delAddress = (username, index) => axios.post(`http://localhost:3000/users/delAddr`, { username: username, index: index }).then((res) => {
  return res
})
// 添加购物车
export const addCar = (username, goodsDetail) => axios.post(`http://localhost:3000/users/addCar`, { username: username, goodsDetail: goodsDetail }).then((res) => {
  return res
})
// 删除购物车内商品
export const clearCar = (username, nums) => axios.post(`http://localhost:3000/users/clearCar`, { username: username, nums: nums }).then((res) => {
  return res
})
// 添加订单
export const addOrder = (username, goodsDetail) => axios.post(`http://localhost:3000/users/addorder`, {
  username: username, goodsDetail: goodsDetail
})



// 测试用
// get请求传参方式
// 不加引号的可以（加引号的不可以，因为=右边就是最终的解析结果）
// export const test = (username) => axios.get(`http://localhost:3000/users/userList?name=${username}`).then((res) => {
//   return res
// })
// export const test = (username) => axios.get(`http://localhost:3000/users/userList`, { params: { name: username } }).then((res) => {
//   return res
// })







