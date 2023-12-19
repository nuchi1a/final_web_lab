const express = require('express') //引入express 模块
const app = express()              //创建实例
// const mysql = require('mysql')     //引入mysql 模块
const mysql = require('mysql2');
var b=0;
// var s=document.getElementById('username').value
// var a=document.getElementById('password').value
var s="787878";
var a='789987';

// 创建数据库连接 填入数据库信息 
//填自己数据库的信息!!!!!!!!!!!
const conn = mysql.createConnection({
  user:'root',          //用户名
  password:'294835925',	//密码
  host:'localhost',		//主机（默认都是local host）
  database:'mydatabase'       //数据库名
})

// 测试连接
conn.connect(err=>{
  console.log(err,'如果为null 就是连接成功');
})

 const user = { username: s, password: a };

conn.query('INSERT INTO user SET ?', user, (error, result) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }

  console.log('Rows affected:', result.affectedRows);
});
function btnAction()
{      
  window.alert("注册成功！");
  b=1;                
  conn.query('INSERT INTO user SET ?', user, (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }
  
    console.log('Rows affected:', result.affectedRows);
  });
}