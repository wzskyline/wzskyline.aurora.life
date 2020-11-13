'use strict';

const Controller = require('egg').Controller;
function col(arr){
 return {
   number:arr[0] || '',
   desc:arr[1] || '',
   type:arr[2] || '',
   type:arr[3] || '',
   type:arr[4] || '',
   type:arr[5] || '',
   type:arr[6] || '',
   date:arr[7] || '',
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
  async uploadExcel() { 
    const file = this.ctx.request.files[0]; 
    const xlsx = require('node-xlsx');  
    let excel = xlsx.parse(file.filepath);
    let firstPage = excel[0].data    
    for(let i = 0;  i <  firstPage.length ;i++){ 
      let s= await this.app.mysql.insert('register',{ username:firstPage[i][1], password:firstPage[i][2]})
    } 
    this.ctx.body = { message:'ok'};
  }
   
}

module.exports = controllerExcel;
