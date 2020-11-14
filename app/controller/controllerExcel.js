'use strict';

const Controller = require('egg').Controller;
const table
function col(arr){
 return {
  number:arr[0] || '',
  name:arr[1] || '',
  mark:arr[2] || '',
  unit:arr[3] || '',
  store:arr[4] || '',
  position:arr[5] || '',
  type:arr[6] || '',
  desc:arr[7] || '',
 }
}
class controllerExcel extends Controller {
  async excelPage() { 
    await this.ctx.render('excel');
  }
  async getExcelJosn() {
    const data = await this.app.mysql.select('register') 
    this.ctx.body = data;
  }
  async uploadExcelTest() { 
    const file = this.ctx.request.files[0]; 
    const xlsx = require('node-xlsx');  
    let excel = xlsx.parse(file.filepath);
    let firstPage = excel[0].data    
    for(let i = 0;  i <  firstPage.length ;i++){ 
      let s= await this.app.mysql.insert('register',{ username:firstPage[i][1], password:firstPage[i][2]})
    } 
    this.ctx.body = { message:'ok'};
  }
  async uploadExcel() { 
    const file = this.ctx.request.files[0]; 
    const xlsx = require('node-xlsx');  
    let excel = xlsx.parse(file.filepath);
    let firstPage = excel[0].data    
    for(let i = 0;  i <  firstPage.length ;i++){ 
      let line = col(firstPage[i])
      let s= await this.app.mysql.insert('register',line)
    } 
    this.ctx.body = { message:'ok'};
  }
   
}

module.exports = controllerExcel;
