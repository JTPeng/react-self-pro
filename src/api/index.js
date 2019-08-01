import ajax from './ajax.js'

// 评论相关
export const reqComment = (url,page,size) => ajax(url,{page,size})
// 搜索接口默认显示内容
export const reqSearchContent = url => ajax(url)
// 搜索框输入内容触发
export const reqSearchInput = (url, value) => ajax(url, {keywordPrefix:value})
