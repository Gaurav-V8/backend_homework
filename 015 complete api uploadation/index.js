const  express = require('express');
const allRoutes = require('./src/app');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.join('src', 'uploads')));

app.use(allRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on PORT ${process.env.PORT}`);
})