// const express = require('express') //引入express 模块
// const app = express()              //创建实例
// const mysql = require('mysql')     //引入mysql 模块

// // 创建数据库连接 填入数据库信息 
// //填自己数据库的信息!!!!!!!!!!!
// const conn = mysql.createConnection({
//   user:'root',          //用户名
//   password:'294835925',	//密码
//   host:'localhost',		//主机（默认都是local host）
//   database:'mydatabase'       //数据库名
// })

// // 测试连接
// conn.connect(err=>{
//   console.log(err,'如果为null 就是连接成功');
// })




// // const user = { username: 'John Does', password: '123' };

// // conn.query('INSERT INTO user SET ?', user, (error, result) => {
// //   if (error) {
// //     console.error('Error executing query:', error);
// //     return;
// //   }

// //   console.log('Rows affected:', result.affectedRows);
// // });






// // conn.query('SELECT * FROM user', (error, results, fields) => {
// //   if (error) {
// //     console.error('Error executing query:', error);
// //     return;
// //   }

// //   console.log('Query results:', results);
// // });


// // const user = { username: 'John Does', password: '123' };

// // conn.query('INSERT INTO user SET ?', user, (error, result) => {
// //   if (error) {
// //     console.error('Error executing query:', error);
// //     return;
// //   }

// //   console.log('Rows affected:', result.affectedRows);
// // });








// // // 定义路由(说白了就是网址)     
// // app.get('/a',(req,res)=>{
// //   console.log('1。。。。。');
// //   let sqlStr =  "INSERT INTO user(username,password )VALUES('123','123')"
// //      //执行mysql 语句
// //      conn.query(sqlStr,(err)=>{
// //          console.log(err,'如果为null，sql语句执行成功')
// //      })
// //      //成功后的页面显示
// //      res.send('插入成功')
// //      console.log('2。。。。。');
// //  })

// //  // 查询信息
// // app.get('/find',(req,res)=>{
// //   console.log('1。。。。。');
// //   let sql = `SELECT * FROM user `
// //   conn.query(sql,(err,results)=>{
// //   //返回的查询信息为result 然后将其显示在页面上
// //       res.send(results)
// //       console.log('1。。。。。');
// //   })
// // })



// // // 开启服务器
// // app.listen(3000,()=>{
// //   console.log('服务器在3000端口开启。。。。。');
// // })


const mysql = require("mysql");
// 连接池
const pool = mysql.createPool({
  host:"localhost",
  user:"root",//我本地数据库的账户名
  password:"294835925",//我本地的数据库登陆密码
  database:"mydatabase",//我自己创建的数据库名字
  // 可选
  queueLimit:3,
  connectionLimit:20
})
//添加一个query方法
let query = function(sql,callBack){
  pool.getConnection((err,conn)=>{
    if (err) {
      console.log(err);
      return
    }
    conn.query(sql,(err,data)=>{
      if (err) {
        console.log(err);
        return
      }
      if (callBack) {
        callBack(data);
      }
    })
  })
}
/**
 * 插入数据
 * @param {*} table 表名
 * @param {*} datas 数据对象
 * @param {*} callBack 插入成功后的回调函数
 */
let insert = (table,datas,callBack)=>{
  //拼接SQL
  let fields = '';//字段
  let values = '';//值
  for (const k in datas) {
    fields += k+"," //拼接字段
    values += `'${datas[k]}',`
  }
  //清除最后一位的逗号。
  fields = fields.slice(0,-1);
  values = values.slice(0,-1);
  // console.log(fields);
  // console.log(values);
  let sql = `INSERT INTO ${table} (${fields}) VALUES (${values})`;
  query(sql,callBack)
};

//封装一个删除sql方法 
let del = (table,datas,callBack)=>{
  let arr = ['1=1']; //避免datas为空时，出现异常错误。
  for (const k in datas) {
    arr.push(`${k} = '${datas[k]}'`);
  }
  let sql = `delete from ${table} where ${arr.join(" and ")}`;
  query(sql,callBack)
}
/**
 * 修改方法  
 * @param {string} table 表名
 * @param {object} sets 修改的字段与值
 * @param {object} wheres 判断条件
 * @param {Function} callBack 回调函数
 */
let update = (table,sets,wheres,callBack)=>{
  //准备一个数组，用来拼接 where子句
  let whereArr = ['1=1']; //避免datas为空时，出现异常错误。
  for (const k in wheres) {
    whereArr.push(`${k} = '${wheres[k]}'`);
  }
  //准备一个数组，用来拼接 set 子句
  let setArr = [];
  for (const k in sets) {
    setArr.push(`${k} = '${sets[k]}'`)
  }
  let sql = `UPDATE ${table} SET ${setArr.join(",")}  WHERE ${whereArr.join(" and ")}`
  query(sql,callBack)
}
// 导出
module.exports = {
  query,
  insert,
  del,
  update
};

