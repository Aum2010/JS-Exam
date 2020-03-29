var sql = require("mssql");
var express = require('express');
var app = express();



var config = {
    user: 'ssd',
    password: 'ssd',
    server: '203.158.253.201',
    database: 'ssd_db',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

    var sqlrq = new sql.Request();

var dbcon = new sql.ConnectionPool(config);
   
        dbcon.connect().then(() => {
            console.log("Conneted!");
            
            var rq = "select * from thanes1"
            sqlrq.query(rq,(err,data) => {
                if(err){console.log(err);}
                    console.log(data);
            })
            
        })
        .catch((err) => {
            console.log(err);
        })

      








