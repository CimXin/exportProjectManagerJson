/**
 * 用途：从git拉取repo下来之后在VS Code中生成项目文件夹（使用的是Project Manager插件）
 * 只支持repo在同一个文件夹下
 * 只支持 Mac OS
 */

let config = require("./config");

let repoPath = config.workSpacePath;
let projectManagerJsonPath1 = config.pmJsonPath;
let rootPath = config.rootPath();

let repoAbsolutePath = rootPath + repoPath;
let projectManagerJsonPath = rootPath + projectManagerJsonPath1;
let fs = require("fs");

var resultArr = [];
var repoData = fs.readdirSync(repoAbsolutePath);
repoData.forEach((name) => {
    if (name.indexOf('.DS_Store') != -1) {
        return;
    }
    resultArr.push({
        name: name,
        rootPath: repoAbsolutePath + name,
        paths: [],
        group: "GitStar"
    })
});
fs.writeFile(projectManagerJsonPath, JSON.stringify(resultArr, null, 2), 'utf8', (err) => {
    if (!err) {
        console.log("导出ProjectManager-Json文件成功.")
    }
});