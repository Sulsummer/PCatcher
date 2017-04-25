/**
 * 整个抓取程序的主入口
 */

// 引入配置文件
const UserInfo = require('./config/user_info');
const BaseInfo = require('./config/base_info');

const PCatcher = require('./src/pcatcher');

let cather = new PCatcher(UserInfo, BaseInfo);

cather.loginStart();