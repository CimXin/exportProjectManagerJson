/**
 * 返回当前用户的根目录
 * eg: 用户名 mic -> path:  /Users/mic
 */
module.exports.rootPath = () => {
    var os = require("os");
    return os.userInfo().homedir;
}

/**
 * 项目目录
 */
module.exports.workSpacePath = '/Documents/privateP/';

/**
 * 插件Project Manager 配置文件目录
 */
module.exports.pmJsonPath = '/Library/Application Support/Code/User/projects.json';