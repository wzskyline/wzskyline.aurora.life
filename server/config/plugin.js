'use strict';

/** @type Egg.EggPlugin */
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.security = false;