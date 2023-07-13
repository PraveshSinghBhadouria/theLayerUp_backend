var mysql = require('mysql')
var pool = mysql.createPool({ 
    
     host: 'sql.freedb.tech',
     port: 3306,
     user: 'freedb_TheLayerUp',
     password: '!GeZrqUR97qF%!P',
     database: 'freedb_TheLayerUp',
     connectionLimit: 100

   /* host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'theultimate',
    connectionLimit: 100
*/
})

module.exports = pool;


