/**
 * 关于用户的一些基础设定，会涉及用户P站的账户密码（图片抓取用）
 * 请注意该配置文件的安全性
 */

let UserInfo = {
  // 填写 P站账号信息
  'username': '请输入你的账户',
  'password': '请输入你的密码',
  // 用户指定的关键词（必须）
  'keyWord': '搜索关键词',
  // 用户设定的收藏星数，默认为100(数字) 
  // 只会下载比设定星数高的图片
  'bookMarker': 100,
  //用户最多下载图片数(默认为100张)
  'maxPicture': 100,
  // 图片存放位置
  // 默认存放在上级picture文件夹中
  'filePath': 'picture/',
  // 关于搜索参数的设置
  'searchConfig': {
    // 设置匹配模式
    // 完全一致：s_tag_full （默认）
    // 部分一直：s_tag
    's_mode': 's_tag_full',
    // 搜索关键词
    'word': '',
    // 搜索结果排序 默认为时间排序
    'order': 'date_d',
    // R-18 图片是否显示
    // 0：不显示R-18图片（默认）
    // 1：只显示R-18
    'r18': 0,
    // 页数 默认从第一页开始
    'p': 1
  },
  // 抓取并发数 默认为5
  'max_async': 5
};

module.exports = UserInfo;
