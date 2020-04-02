const express = require('express');
const connectDB = require('./config/db')

const app = express();

//Connect DB

connectDB()

// Init middleware

app.use(express.json({
    extended: false
}))

app.get('/', (req, res) => res.json({
    msg: "Welcome to contect keeper API"
}))

// Define routes

app.use('/api/jobs', require('./routes/jobs'))



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));