'use strict';

const Controller = require('egg').Controller;
const tableName = 't_excel_a';

/*
t_excel_a
CREATE TABLE IF NOT EXISTS `t_excel_a`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `fp` VARCHAR(100),
   `number` VARCHAR(100),
   `name` VARCHAR(100),
   `mark` VARCHAR(500),
   `unit` VARCHAR(300),
   `store` VARCHAR(300),
   `position` VARCHAR(500),
   `type` VARCHAR(500),
   `desc` VARCHAR(500),
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `tc`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `fp` VARCHAR(100),
   `date` DATE,
   `name` VARCHAR(100),
   `gongyi` VARCHAR(500),
   `number` VARCHAR(300),
   `time` VARCHAR(300),
   `position` VARCHAR(500), 
   `desc` VARCHAR(500),
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

delete from tc;
   
CREATE TABLE IF NOT EXISTS `tb`( `id` INT UNSIGNED AUTO_INCREMENT,
   `data` DATE, `name` VARCHAR(100), `guige` VARCHAR(100),
   `number` VARCHAR(100),  `unit` VARCHAR(100), `person` VARCHAR(100),
    `desc` VARCHAR(100),PRIMARY KEY ( `id` ) )ENGINE=InnoDB DEFAULT CHARSET=utf8;  
 
*/
function col(arr,table){
  switch(table){
    case 'ta': return { number:arr[0] || '', name:arr[1] || '', mark:arr[2] || '',
     unit:arr[3] || '', store:arr[4] || '', position:arr[5] || '', type:arr[6] || '', desc:arr[7] || '',fp:'' }
    case 'tb': return { date: new Date ((arr[0]- 25567 - 2) * 86400 * 1000) , name:arr[1] || '', guige:arr[2] || '',
    number:arr[3] || '', unit:arr[4] || '', person:arr[5] || '', desc:arr[6] || '',fp:''}
    case 'tc': return { date: new Date ((arr[0]- 25567 - 2) * 86400 * 1000) || '', name:arr[1] || '', guige:arr[2] || '',
    type:arr[3] || '', need:arr[4] || '', finish:arr[5] || '',
    unit:arr[6] || '', usefor:arr[7] || '', 
    desc:arr[8] || '', fp:''}
    case 'td': return { date: new Date ((arr[0]- 25567 - 2) * 86400 * 1000) || '', name:arr[1] || '', 
    guige:arr[2] || '', need:arr[3] || '', finish:arr[4] || '', unit:arr[5] || '', 
    position:arr[6] || '', usefor:arr[7] || '',fp:''}
    case 'te': return { date: new Date ((arr[0]- 25567 - 2) * 86400 * 1000) || '', name:arr[1] || '',
    gongyi:arr[2] || '', number:arr[3] || '', time:arr[4] || '', position:arr[5] || '', desc:arr[6] || '',fp:'' }
  } 
}
class controllerExcel extends Controller {
  async excelPage() { 
    await this.ctx.render('excel');
  }
  async getExcelJosn() {
    try {
    let count = 0 ,data= [], where = " where 1 = 1 and "
    
    const {table,search,page,pageSize,}= this.ctx.query;  

    switch(table){
      case 'ta': where += `number like '%${search}%' or name like '%${search}%' or position like '%${search}%' `; break;
      case 'tb': where += `  name like '%${search}%' order by date desc `; break;
      case 'tc': where += `  name like '%${search}%'  order by date desc  `; break;
      case 'td': where += `  position like '%${search}%' or position like '%${search}%'  order by date desc  `; break;
      case 'te': where += `  name like '%${search}%' or position like '%${search}%' order by date desc  `; break;
    }
    count = await this.app.mysql.query(`select count(id) as count from ${table} ${where}  `)
    data = await this.app.mysql.query(`select * from  ${table}  ${where}  limit ${(page-1)* pageSize},${1*pageSize}`);
    this.ctx.body = { count:count[0].count, data,page,pageSize};
    } catch (error) {
      this.ctx.body = { message:error};
      console.log('getExcelJosn()',error)
    }
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
    try {
      const file = this.ctx.request.files[0];  
      const table = this.ctx.request.body.table;  
      const xlsx = require('node-xlsx');  
      let excel = xlsx.parse(file.filepath);
      let firstPage = excel[0].data     
      for(let i = 1;  i <  firstPage.length ;i++){  
        if(!firstPage[i][0]) break;
        await this.app.mysql.insert(table,col(firstPage[i],table))
        this.ctx.body = { message:'ok'};
      } 
    } catch (error) {
      this.ctx.body = { message:error};
      console.log('uploadExcel()',error)
    } 
  }
  
  async updateExcel(){
    try {
      const Literal = this.app.mysql.literals.Literal
      const{ table,obj} = this.ctx.request.body;  
      if(obj.date){
        //insert into te (date) values ( str_to_date('08/09/2008', '%m/%d/%Y'))
        obj.date = new Literal(`str_to_date('${obj.date }','%Y-%m-%d')`) //this.app.mysql.literals.now;
      } 
      let result = await this.app.mysql.update(table,obj);
      this.ctx.body = { message:'ok'};
    } catch (error) {
      this.ctx.body = { message:error};
      console.log('updateExcel()',error)
    }  
  }
  async addOneExcel(){
    try {
      const Literal = this.app.mysql.literals.Literal
      const{ table,obj} = this.ctx.request.body; 
      if(obj.date){
        //insert into te (date) values ( str_to_date('08/09/2008', '%m/%d/%Y'))
        obj.date = new Literal(`str_to_date('${obj.date }','%Y-%m-%d')`) //this.app.mysql.literals.now;
      } 
      let result = await this.app.mysql.insert(table,obj);
      this.ctx.body = { message:'ok'};
    } catch (error) {
      this.ctx.body = { message:error};
      console.log('addOneExcel()',error)
    }  
  }

  async deleteExcel(){
    try {
      const { table,id }= this.ctx.query; 
      let result= await this.app.mysql.delete(table,{ id });
      this.ctx.body = { message:'ok'};
    } catch (error) {
      this.ctx.body = { message:error};
      console.log('deleteExcel()',error)
    } 
    
  }

  async deleteTable(){
    try {
      const { table,id }= this.ctx.query; 
      if(id == table){
         await this.app.mysql.delete(table);
         this.ctx.body = { message:'ok'};
      }else{
         this.ctx.body = { message:'fail'};
      }
      
    } catch (error) {
      this.ctx.body = { message:error};
      console.log('deleteTable()',error)
    } 
    
  }
   
}

module.exports = controllerExcel;
//https://ruphi.cn/archives/298/