const puppteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const promisify = require('util').promisify;
const mkdir = promisify(fs.mkdir);
const rmdir = promisify(fs.rmdir);
const readdir = promisify(fs.readdir);

const { screenshot } = require('../config/defaultConfig');

readdir(path.resolve(__dirname,'./../')).then(data=>{
    if(data.indexOf('images')===-1){
        mkdir(path.resolve(__dirname,'./../images')).then(err=>{
            if(err){ throw err; }
            else console.log(chalk.green("图片文件夹创建成功!!!"))
        })
    }
})

// return;
shot = async () =>{
    const broswer = await puppteer.launch({
        //  这个地方记得要添加这个路径，否则会有Chroumi的bug
        executablePath:path.resolve(__dirname,'../node_modules/puppeteer/.local-chromium/linux-650583/chrome-linux/chrome')
    });
    const page = await broswer.newPage();
    await page.goto('http://baidu.com/');
    await page.screenshot({ 
        path: `${screenshot}/${Date.now()}.png` 
    });
   
    await broswer.close(); 
}

shot();

