const express = require('express');
const bp = require('body-parser');
const path = require('path');
const cors = require('cors')
const port = process.env.PORT || 5000;
const config = require('./config/configrations');
const patientRoute = require('./routes/patientRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const connectDB = config.connectDB;
connectDB();
app.use(cors())
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());// for using application/json
app.use(bp.urlencoded({extended: false}));// for form data
app.use('/images',express.static(path.join(__dirname,'images')));
app.use('/patients',patientRoute);
app.use('/users',userRoutes);
app.listen(port,()=>{
    console.log(`server started on port${port}`);
});
