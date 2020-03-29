const express = require('express');
const path = require('path');

const logger = require('./logger');
const app = express()


app.use(logger)
//app.use(express.static(path.join(__dirname,'public')))

app.use(express.json());
app.use(express.urlencoded( {extended : false} ))
// app.get('/',(req,res) => {
//     //res.send('<h1>Hello World</h1>')
//     res.sendFile(path.join(__dirname,'public','demohtml1.html'))

// })
//app.use(require('./routes/api/member'))
app.use('/api/member',require('./routes/api/member'))

const PORT = process.env.PORT || 6500

app.listen(PORT,() => {console.log(`Server Strating PORT ${PORT}`);})