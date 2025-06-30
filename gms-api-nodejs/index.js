const express = require('express')
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser')


const PORT = process.env.PORT;
require('./DBConn/conn');
app.use(cookieParser());
app.use(express.json());

const GymRoutes = require('./Routes/gym')
const MembershipRoutes = require('./Routes/membership');
const MemberRoutes = require('./Routes/member')

app.use('/auth',GymRoutes)
app.use('/plans',MembershipRoutes)
app.use('/members',MemberRoutes);

app.listen(PORT, ()=>{
    console.log("Server is running on 4000")
})