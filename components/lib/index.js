import Demo from "./demo";
import Card from "./card";

const components = {
  Demo,
  Card,
}
const install = function (Vue) {
  // 防止重复安装
  if(install.installed) return;
  Object.keys(components).forEach(key=>{
    Vue.component(components[key].name,components[key])
  })
}

const API = {
  install
}

export default API;