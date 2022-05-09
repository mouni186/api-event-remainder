const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const controller = require('./controller/index')
const validator = require('./middleware/validation')
const sanitizer = require('./middleware/sanitization')


app.use(bodyParser.json());
app.use(cors());

                                                            //From Frontend                         //From Backend
app.post('/remainder-signup',controller.remainderSignup);  //email,name,password                            --
app.post('/remainder-login',controller.remainderLogin);    //email,password                                userid
app.post('/add-remainder',controller.remainderDetails);    //userid,title,description,date,time              -
// app.post('/view-remainder',controller.viewRemainder);


const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})