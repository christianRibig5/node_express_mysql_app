
const companies = require('./routes/companies');
const home = require('./routes/home');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require('./models');
db.sequelize.sync();

const corsOptions = {
    origin: "http://localhost:3031"
};
  
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'pug');
app.set('views', './views');//default
if(app.get('env')==='development'){
  app.use(morgan('tiny'));
}

app.use('/',home);
app.use('/api/companies',companies);


const port=Number(process.env.PORT||3000);
app.listen(port,()=>console.log(`Listening to port ${port}..`));

