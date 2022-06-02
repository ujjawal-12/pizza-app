const app = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const allroutes = require('./routes/routes');
 require('dotenv').config();
const server = app();
const PORT = process.env.PORT || 6001 ;

server.use(cors());
server.use(bodyParser.json());
server.use("/",allroutes);

server.listen(PORT,()=>console.log(`server listening at port ${PORT}`));