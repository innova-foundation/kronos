// Copyright (c) 2020 Carsen Klock
// InnoVault LevelDB Data Store using Level
const level = require('level');
  
//console.log(`InnoVault Data Directory: ` + getUserHome()+`\\InnoVault\\DATA`); 

function getUserHome() {
    // From process.env 
    if (process.platform == 'win32') {
      return process.env.APPDATA+'\\InnoVault\\DATA\\'; 
    } else {
      return process.env.HOME+'/InnoVault/DATA/'; 
    }
} 

const database = level(getUserHome()+'innovaultleveldb');

module.exports = database;