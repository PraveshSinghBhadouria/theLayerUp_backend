var mysql = require('mysql')
var pool = mysql.createPool({ 
    
     host: 'sql.freedb.tech',
     port: 3306,
     user: 'freedb_TheLayerUps',
     password: '4hyN5py#p7?PpEk',
     database: 'freedb_TheLayerUps',
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


