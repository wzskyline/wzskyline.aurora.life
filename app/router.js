'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.controllerRegister.controllerRegister);
  router.get('/commit', controller.controllerRegister.test);
  router.get('/login', controller.controllerLogin.judgeLogin);

  router.get('/excel', controller.controllerExcel.excelPage);
  router.post('/uploadExcel', controller.controllerExcel.uploadExcel); 

  router.get('/getExcelJosn', controller.controllerExcel.getExcelJosn);
  router.get('/updateExcel', controller.controllerExcel.updateExcel);
  router.get('/deleteExcel', controller.controllerExcel.deleteExcel); 
};
