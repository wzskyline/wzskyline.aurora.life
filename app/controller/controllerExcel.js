'use strict';

const Controller = require('egg').Controller;
const tableName = 't_excel_a';
/*
t_excel_a
CREATE TABLE IF NOT EXISTS `t_excel_a`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(100),
   `mark` VARCHAR(500),
   `unit` VARCHAR(300),
   `store` VARCHAR(300),
   `position` VARCHAR(500),
   `type` VARCHAR(500),
   `desc` VARCHAR(500),
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
*/
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
    const data = await this.app.mysql.select( tableName ) 
    this.ctx.body = data;
  }
  async uploadExcelTest() { 
    const file = this.ctx.request.files[0]; 
    const xlsx = require('node-xlsx');  
    let excel = xlsx.parse(file.filepath);
    let firstPage = excel[0].data    
    for(let i = 0;  i <  firstPage.length ;i++){ 
      let s= await this.app.mysql.insert(tableName,{ username:firstPage[i][1], password:firstPage[i][2]})
    } 
    this.ctx.body = { message:'ok'};
  }
  async uploadExcel() { 
    const file = this.ctx.request.files[0]; 
    const xlsx = require('node-xlsx');  
    let excel = xlsx.parse(file.filepath);
    let firstPage = excel[0].data    
    for(let i = 0;  i <  firstPage.length ;i++){ 
      await this.app.mysql.insert(tableName,col(firstPage[i]))
    } 
    this.ctx.body = { message:'ok'};
  }
  async deleteExcel(){
    const id = this.ctx.body; 
    console.log(id)
    let result= await this.app.mysql.delete(tableName,{ id: 3 });
    this.ctx.body = { message:'ok',result:result};
  }
   
}

module.exports = controllerExcel;
