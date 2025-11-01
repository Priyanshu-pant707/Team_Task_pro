const express = require('express');

const app = express();

const connectDb = require('./config/db');

connectDb();


app.use(express.json());



//routers

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);



app.get('/', function (req, res) {
    res.send("TeamTask Pro Backend Running ✅");
})


app.listen(5000, function () {
    console.log('Server is running on port 3000');
})