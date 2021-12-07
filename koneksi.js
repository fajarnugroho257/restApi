var mysql = require('mysql');

//buat koneksi
const conn = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password : '',
    database : 'pemesanan'   
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Terkoneksi');
});

module.exports = conn;