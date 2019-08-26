const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const url = 'http://zhihu.com';
;
const { msg } = require('../config/account');

(async () => {
  const broswer = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  })
  const page = await broswer.newPage();
  await page.goto(url, {
      waitUntil: 'networkidle2'
      // 当网页空闲的时候，表示页面已经加载完成了
  })

  let changeLogin = await page.$('.SignFlow-tabs div')
  // console.log(changeLogin);
  // await changeLogin.click({delay:20});
  await page.screenshot({path: 'example.png'});
  
  await page.close();
  await page.type('#account',msg.mobile,{delay:20});
  await page.type('#passwd',msg.password,{delay:20});

  // await sleep(3000);
})()