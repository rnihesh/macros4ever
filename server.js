const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const foodRoute = require('./routes/foodRoute');
const userRoute = require('./routes/userRoute');
const mealRoute = require('./routes/mealRoute');

const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/foods', foodRoute);
app.use('/api/users', userRoute);
app.use('/api/meals', mealRoute);

app.get('/', (req, res) => {
    res.send('Running!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
