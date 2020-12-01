'use strict';

const Service = require('egg').Service;

class ServiceRegisterService extends Service {
  async InsertDatabase() {
    console.log('=================');
    const username = this.ctx.query.username;
    const password = this.ctx.query.password;
    await this.app.mysql.insert('register', { username, password });
    console.log(username + '......' + password);
  }
  async InsertDatabase2(arr) {
    console.log('=================',arr.length); 
    for(let i = 1;  i <  arr.length ;i++){   
      const sel = await this.app.mysql.get('cp', { code:arr[i].code });
      console.log('=================',sel); 
      if(!sel){
        await this.app.mysql.insert('cp',arr[i]);
      }
    } 
  }
}

module.exports = ServiceRegisterService;
