let host = location.host.includes('8000')?'http://106.12.144.8:7001': `http://${location.host}`;
host = 'http://106.12.144.8:7001'
export const urls={
  getExcelJosn:`${host}/getExcelJosn`,
  uploadExcel:`${host}/uploadExcel`,
  deleteExcel:`${host}/deleteExcel`,
  updateExcel:`${host}/updateExcel`,
  addOneExcel:`${host}/addOneExcel`,
}

const safeFetch = async (url,method,postData,headers)=>{
  let arg = {}
  if(method){
    arg = { method: method, body:JSON.stringify(postData), mode:'cors', headers:{
      "content-type":"application/json;charset=utf-8"
    }  }
  } 
  const res = await fetch(url, arg).then(function(response){  
    return response.json() 
   }).catch(function(e){ 
    console.log('error: ' + e );
   })
  return res; 
}
export const  getExcelJosn = async (arg)=>{
   let url = `${urls.getExcelJosn}?table=${arg.table}&search=${arg.search}&page=${arg.page}&pageSize=${arg.pageSize}`
   const res = await safeFetch(url); return res;
}
export const  uploadExcel = async ()=>{
  const res = await safeFetch(urls.uploadExcel); return res;
}
export const  deleteExcel = async (table,id)=>{
  const res = await safeFetch(`${urls.deleteExcel}?table=${table}&id=${id}`); return res;
}
export const  updateExcel = async (table,obj)=>{
  const res = await safeFetch(`${urls.updateExcel}`,'post',{table,obj}); return res;
}
export const  addOneExcel = async (table,obj)=>{
  obj.id = Date.now()%1000000;
  const res = await safeFetch(`${urls.addOneExcel}`,'post',{table,obj}); return res;
}
export default {
  getExcelJosn,deleteExcel,updateExcel,addOneExcel
}