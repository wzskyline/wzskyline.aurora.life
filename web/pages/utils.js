const host = location.host.includes('8000')?'http://106.12.144.8:7001': location.host;
export const urls={
  getExcelJosn:`${host}/getExcelJosn`,
  uploadExcel:`${host}/uploadExcel`,
  deleteExcel:`${host}/deleteExcel`,

}
const safeFetch = async (url,method,postData,herder)=>{
  let arg = {}
  if(method){
    arg = { method: method, body:JSON.stringify(postData), mode:'cors',  credentials: 'include'}
  } 
  const res = await fetch(url, arg).then(function(response){  
    return response.json() 
   }).catch(function(e){ 
    console.log('error: ' + e );
   })
  return res; 
}
export const  getExcelJosn = async (arg)=>{
   let url = `${urls.getExcelJosn}?search=${arg.search}&page=${arg.page}&pageSize=${arg.pageSize}`
   const res = await safeFetch(url); return res;
}
export const  uploadExcel = async ()=>{
  const res = await safeFetch(urls.uploadExcel); return res;
}
export const  deleteExcel = async (id)=>{
  const res = await safeFetch(`${urls.deleteExcel}?id=${id}`); return res;
}