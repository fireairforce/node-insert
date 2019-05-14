const puppteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const promisify = require('util').promisify;
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const msg = require('../config/account');

const { screenshot } = require('../config/defaultConfig');

// 创建一个存放爬取图片的存放的文件夹
readdir(path.resolve(__dirname,'./../')).then(data=>{
    if(data.indexOf('images')===-1){
        mkdir(path.resolve(__dirname,'./../images')).then(err=>{
            if(err){ throw err; }
            else console.log(chalk.green("图片文件夹创建成功!!!"))
        })
    }
})

// return;
login = async () =>{
    const broswer = await puppteer.launch({
        //  这个地方记得要添加这个路径，否则会有Chroumi的bug
        executablePath:path.resolve(__dirname,'../node_modules/puppeteer/.local-chromium/linux-650583/chrome-linux/chrome')
    });
    const page = await broswer.newPage();
    await page.goto('http://neuqer.com/login');
    
    await page.type('#account',msg.account,{delay:20});
    await page.type('#passwd',msg.password,{delay:20});

    let loginBtn = await page.$('#btn-login');
    await loginBtn.click({delay:20});

    await page.waitFor(600);
   
    console.log('登录成功!!!');

    let clickIt = await page.$('#like-btn');
    let sum = 0;
    while(sum<10000){
        sum++;
        await clickIt.click({delay:20})
    }
    
    await page.close();
}
login();



