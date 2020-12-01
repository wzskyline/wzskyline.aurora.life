const path       = require("path");
const url        = require("url");
const fs         = require("fs"); 
const superagent = require("superagent"); // npm i superagent  cheerio
const cheerio    = require("cheerio");

module.exports = {
  schedule: {
    interval: '9m', // 1 ���Ӽ��
    type: 'all', // ָ�����е� worker ����Ҫִ��
  },
  async task(ctx) { 
	superagent.get("https://gd11x5.icaile.com/?op=rxjb").end(async (error,response)=>{ 
	var $ = cheerio.load(response.text); 
        var result=[]; 
        $("tr.bline.round").each((index,value)=>{
			  var obj = {
					  code:$(value).find("td").eq(0).text(),
					  q1:$(value).find("td").eq(1).text(),
					  q2:$(value).find("td").eq(2).text(),
					  q3:$(value).find("td").eq(3).text(),
					  q4:$(value).find("td").eq(4).text(),
					  q5:$(value).find("td").eq(5).text(),
				  }
					result.push(obj)	  
		})			
		console.log(result.length)
		const sel = await ctx.service.serviceRegister.InsertDatabase2(result);
    });
	

  },
 
};