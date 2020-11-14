
'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + ' ';
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'test',
    },
  };
  
  config.view = {
    defaultViewEngine: '.ejs',

    mapping: {
      '.html': 'ejs',
    },
  };
  config.multipart = {
    fileSize:'100mb',
    mode:'file',
    whitelist(){ return true}
   }
   config.cors = {
    origin: '*', // 表示允许的源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' // 表示允许的http请求方式
  };
  return {
    ...config,
  };

};
