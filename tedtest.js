var Connection = require('tedious').Connection
var Request = require('tedious').Request
var express = require('express');
var app = express();

var config = {
  server : '203.158.253.201',
        authentication :{ 
                    type : 'default'
                    ,options:{userName: 'ssd', password : 'ssd'}},
        options : {encrypt:false , database : 'ssd_db' , port : 1433},
}

var connection = new Connection(config)


connection.on('connect', function (err) {
  if (err) {
    console.log(err)
  } else {
    //executeStatement()
    
    console.log('Connected!');
  }
})

function executeStatement () {
  request = new Request("SELECT * FROM [ssd_db].[dbo].[Thanet1]", function (err, rowCount) {
    if (err) {
      console.log(err)
    } else {
      console.log(rowCount + ' rows')
    }
    connection.close()
  })

  request.on('row', function (columns) {
    columns.forEach(function (column) {
      if (column.value === null) {
        console.log('NULL')
      } else {
        console.log(column.value)
      }
    })
  })

  connection.execSql(request)
}